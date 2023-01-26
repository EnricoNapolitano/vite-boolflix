<script>
import { store } from '../data/store'
import InfoCard from './InfoCard.vue';
export default {
    data() { return { store } },
    components: { InfoCard }
}
</script>
<template>
    <div>
        <h2>MOVIES</h2>
        <info-card v-for="movie in store.movies" :item="movie" :isMovie="true"></info-card>
        <hr>
        <h2>SERIES</h2>
        <info-card v-for="tvShow in store.tvShows" :item="tvShow" :isMovie="false"></info-card>
    </div>
</template>