<script>
import PlaceHolder from './PlaceHolder.vue';
import MediaSection from './media/MediaSection.vue';
export default {
    name: 'AppMain',
    props: { movies: Array, tvShows: Array },
    components: { PlaceHolder, MediaSection },
}
</script>
<template>
    <main>
        <div class="container">
            <place-holder v-if="!movies && !tvShows"></place-holder>
            <div v-else>
                <media-section collection="movies" title="Film"></media-section>
                <media-section collection="tvShows" title="Serie"></media-section>
            </div>
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

