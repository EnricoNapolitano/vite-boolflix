<script>
import InfoCard from './InfoCard.vue';
export default {
    props: { movies: Array, tvShows: Array },
    components: { InfoCard }
}
</script>
<template>
    <div>
        <h2>MOVIES</h2>
        <info-card v-for="movie in movies" :item="movie" :isMovie="true"></info-card>
        <hr>
        <h2>SERIES</h2>
        <info-card v-for="tvShow in tvShows" :item="tvShow" :isMovie="false"></info-card>
    </div>
</template>