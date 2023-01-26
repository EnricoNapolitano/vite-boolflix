<script>
import axios from 'axios'
import { store } from './data/store';
import { uri } from './data'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    name: 'App',
    data() { return { store } },
    components: { AppHeader, AppMain },
    methods: {
        showSearch(par) {
            //API's call
            axios.get(`${uri.base}${uri.sm}?api_key=${uri.apiKey}&query=${par}`)
                .then((res) => {
                    store.movies = res.data.results;
                });
            axios.get(`${uri.base}${uri.sTv}?api_key=${uri.apiKey}&query=${par}`)
                .then((res) => {
                    store.tvShows = res.data.results;
                });
        }
    }
}
</script>

<template>
    <app-header @send="showSearch"></app-header>
    <app-main></app-main>
</template>