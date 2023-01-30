<script>
import MediaCard from './MediaCard.vue';
export default {
    name: 'MediaSections',
    props: { movies: Array, tvShows: Array },
    components: { MediaCard }
}
</script>

<template>
    <div class="medias-section">
        <h2 class="wrap">FILM</h2>
        <div class="media-card">
            <media-card v-for="movie in movies" :item="movie"></media-card>
        </div>
        <hr class="wrap">
        <h2 class="wrap">SERIE</h2>
        <div class="media-card">
            <media-card v-for="tvShow in tvShows" :item="tvShow"></media-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

hr {
    margin-top: 50px;
    margin-bottom: 50px;
}

h2 {
    font-size: 4rem;
    padding: 30px 0;

    color: $light-grey;
    text-shadow: 2px 2px 5px black;
}

.media-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>