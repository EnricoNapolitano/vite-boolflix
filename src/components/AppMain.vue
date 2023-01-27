<script>
import MediaCard from './MediaCard.vue';
export default {
    props: { movies: Array, tvShows: Array },
    components: { MediaCard }
}
</script>
<template>
    <div>
        <h2>MOVIES</h2>
        <media-card v-for="movie in movies" :item="movie" :isMovie="true"></media-card>
        <hr>
        <h2>SERIES</h2>
        <media-card v-for="tvShow in tvShows" :item="tvShow" :isMovie="false"></media-card>
    </div>
</template>