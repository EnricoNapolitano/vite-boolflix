<script>
export default {
    name: 'MediaCard',
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


        //*** SPOKEN LANGUAGE IN MOVIE/SHOW ***
        hasFlag() {
            const lang = ['it', 'en'];
            return lang.includes(this.item.original_language)
        },
        flagImgPath() {
            //building the image path
            const img = this.item.original_language;
            return new URL(`../assets/img/${img}.png`, import.meta.url).href
        },


        //*** BACKGROUND IMAGE FOR MOVIE/SHOW ***
        backdropImg() {
            //building URL image
            const baseImgUrl = 'https://image.tmdb.org/t/p/w342';
            const endpoint = baseImgUrl + this.item.backdrop_path;
            const undefined = new URL(`../assets/img/undefined.png`, import.meta.url).href

            return !this.item.backdrop_path ? undefined : endpoint;
        },


        //*** SYSTEM OF RATING ***
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
    }
}
</script>

<template>
    <article>
        <figure>
            <img :src="backdropImg" alt="backdrop image">
        </figure>
        <div class="overlay">
            <h3 v-if="isSameTitle">{{ title }}</h3>
            <div v-else>
                <h3>{{ title }}</h3>
                <h4>{{ originalTitle }}</h4>
            </div>
            <div class="rating">
                <i v-for="star in numFullStars" class="fa-solid fa-star"></i>
                <i v-for="star in numEmptyStars" class="fa-regular fa-star"></i>
            </div>
            <div class="language">
                <p v-if="!hasFlag">{{ item.original_language }}</p>
                <img class="flag" v-else :src="flagImgPath" :alt="item.original_language">
            </div>
            <p class="overview">{{ item.overview }}</p>
        </div>
    </article>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

article {
    color: $light-grey;
    padding: 2px;
}

.flag {
    width: 30px;
    height: auto;
}

article {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;

    transition: transform ease 0.6s;
}

.overlay {
    display: none;

    min-height: 194px;
    min-width: 344px;
    padding: 20px;

    text-shadow: 2px 2px $black;
    background-color: rgba($color: $black, $alpha: 0.9);

    position: absolute;
    top: 0;
    left: 0;
}

.rating {
    padding-top: 8px;
}

.language {
    padding-top: 15px;
}

.overview {
    line-height: 18px;
    padding-top: 5px;
}

// HOVER
article:hover {
    transform: scale(1.5);
    margin: 0 100px;
    z-index: 1;
}

article:hover .overlay {
    display: block;
}
</style>