<script>
import { store } from '../../data/store';
import MediaCard from './MediaCard.vue';
export default {
    name: 'MediaSection',
    data() { return { store } },
    props: { collection: String, title: String, movies: Array, tvShows: Array },
    components: { MediaCard }
}
</script>

<template>
    <section :id="collection">
        <h2 class="wrap">{{ title }}</h2>
        <div class="media-card">
            <media-card v-for="video in store[collection]" :item="video"></media-card>
        </div>
        <hr class="wrap">
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

hr {
    margin-top: 50px;
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