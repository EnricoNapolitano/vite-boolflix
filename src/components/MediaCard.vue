<script>
export default {
    props: {
        item: { type: Object },
    },
    computed: {

        //*** TITLES ***
        title() {
            return this.item.title || this.item.name
        },
        originalTitle() {
            return this.item.original_title || this.item.original_name
        },
        isSameTitle() {
            return this.title === this.originalTitle
        },


        //*** */ SPOKEN LANGUAGE IN MOVIE/SHOW ***
        hasFlag() {
            const lang = ['it', 'en'];
            return lang.includes(this.item.original_language)
        },
        flagImgPath() {
            //building the image path
            const img = this.item.original_language;
            return new URL(`../assets/img/${img}.png`, import.meta.url).href
        },


        //*** */ BACKGROUND IMAGE FOR MOVIE/SHOW ***
        backdropImg() {
            //building URL image
            const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
            return baseImgUrl + this.item.backdrop_path
        },


        //*** */ SYSTEM OF RATING ***
        rating() {
            //rating expressed in fifths
            return this.item.vote_average * 5
        },
        numFullStars() {
            return Math.ceil(this.rating / 10)
        },
        numEmptyStars() {
            return Math.ceil(4 - (this.rating / 10))
        }
    },
}
</script>

<template>
    <article>
        <figure>
            <img :src="backdropImg" alt="backdrop image">
        </figure>
        <h3 v-if="isSameTitle">{{ title }}</h3>
        <div v-else>
            <h3>{{ title }}</h3>
            <h4>{{ originalTitle }}</h4>
        </div>
        <div class="language">
            <p v-if="!hasFlag">{{ item.original_language }}</p>
            <img v-else :src="flagImgPath" :alt="item.original_language">
        </div>
        <div class="rating">
            <i v-for="star in numFullStars" class="fa-solid fa-star"></i>
            <i v-for="star in numEmptyStars" class="fa-regular fa-star"></i>
        </div>
        <p>{{ item.overview }}</p>

    </article>
</template>