<script>
import axios from 'axios'
import { uri } from './data'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    name: 'App',
    data() { return { movies: null, tvShows: null, searchedWords: null } },
    components: { AppHeader, AppMain },
    computed: {
        //following computed has to be inserted in axios
        axiosConfig() {
            return {
                params: {
                    api_key: uri.apiKey,
                    query: this.searchedWords
                }
            }
        }
    },
    methods: {
        //generic call to an endpoint
        fetchApi(endpoint, collection) {
            if (!this.searchedWords) return;
            axios.get(`${uri.base}/${endpoint}`, this.axiosConfig)
                .then(res => { this[collection] = res.data.results; });
        },

        //dinamic query
        updateSearchedWords(words) {
            this.searchedWords = words;
        },

        //APIs' call to movies list and series list 
        searchMedia() {
            this.fetchApi('search/movie', 'movies');
            this.fetchApi('search/tv', 'tvShows')
        }
    }

}
</script>

<template>
    <app-header @submit="searchMedia" @type="updateSearchedWords"></app-header>
    <app-main :movies="movies" :tvShows="tvShows"></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>