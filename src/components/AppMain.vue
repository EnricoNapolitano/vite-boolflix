<script>
import MediaCard from './MediaCard.vue';
export default {
    props: { movies: Array, tvShows: Array },
    components: { MediaCard }
}
</script>
<template>
    <div v-if="!movies">
        Cerca un titolo
    </div>
    <section v-else class="medias-section">
        <h2>MOVIES</h2>
        <media-card v-for="movie in movies" :item="movie"></media-card>
        <hr>
        <h2>SERIES</h2>
        <media-card v-for="tvShow in tvShows" :item="tvShow"></media-card>
    </section>
</template>