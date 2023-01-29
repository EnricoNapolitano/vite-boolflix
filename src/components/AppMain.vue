<script>
import PlaceHolder from './PlaceHolder.vue';
import MediaSections from './MediaSections.vue'
export default {
    name: 'AppMain',
    props: { movies: Array, tvShows: Array },
    components: { PlaceHolder, MediaSections },
}
</script>
<template>
    <main>
        <div class="container">
            <place-holder v-if="!movies && !tvShows"></place-holder>
            <media-sections v-else :movies="movies" :tvShows="tvShows"></media-sections>
        </div>
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

main {
    background-color: $black;
    min-height: calc(100vh - 55px);
}
</style>

