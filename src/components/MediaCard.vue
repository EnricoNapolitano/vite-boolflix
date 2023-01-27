<script>
export default {
    props: {
        item: { type: Object },
    },
    computed: {
        title() {
            return this.item.title || this.item.name
        },
        originalTitle() {
            return this.item.original_title || this.item.original_name
        },
        hasFlag() {
            const lang = ['it', 'en'];
            return lang.includes(this.item.original_language)
        },
        flagImgPath() {
            //building the image path
            const img = this.item.original_language;
            return new URL(`../assets/img/${img}.png`, import.meta.url).href
        }
    }
}
</script>

<template>
    <article>
        <h3>{{ title }}</h3>
        <h4>{{ originalTitle }}</h4>
        <div>
            <p v-if="!hasFlag">{{ item.original_language }}</p>
            <img v-else :src="flagImgPath" :alt="item.original_language">
        </div>
        <p>{{ item.vote_average }}</p>
    </article>
</template>