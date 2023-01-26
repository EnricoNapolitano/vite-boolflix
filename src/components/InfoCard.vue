<script>
export default {
    props: {
        item: { type: Object },
        isMovie: { type: Boolean }
    },
    computed: {
        langTextForm() {
            //condition to show the language in textual format
            return this.item.original_language !== 'it' && this.item.original_language !== 'en'
        }
    },
    methods: {
        getFlagImg(img) {
            //building the image path
            return new URL(`../assets/img/${img}.png`, import.meta.url).href
        }
    }
}
</script>

<template>
    <article>
        <!--this shows the movie's title-->
        <h3 v-if="isMovie">{{ item.title }}</h3>
        <!--this shows the serie's title-->
        <h3 v-else>{{ item.name }}</h3>
        <h4 v-if="isMovie">{{ item.original_title }}</h4>
        <h4 v-else>{{ item.original_name }}</h4>
        <div>
            <p v-if="langTextForm">{{ item.original_language }}</p>
            <img v-else :src="getFlagImg(item.original_language)" :alt="item.original_language">
        </div>
        <p>{{ item.vote_average }}</p>
    </article>
</template>