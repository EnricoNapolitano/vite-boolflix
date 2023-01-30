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
            return new URL(`../../assets/img/${img}.png`, import.meta.url).href
        },


        //*** BACKGROUND IMAGE FOR MOVIE/SHOW ***
        backdropImg() {
            //building URL image
            const baseImgUrl = 'https://image.tmdb.org/t/p/w342';
            const endpoint = baseImgUrl + this.item.backdrop_path;
            const undefined = new URL(`../../assets/img/undefined.png`, import.meta.url).href

            return !this.item.backdrop_path ? undefined : endpoint;
        }
    },
    methods: {
        rating(num) {
            //rating expressed in fifths
            const vote = Math.ceil(this.item.vote_average / 2);
            const star = num < vote ? 'fa-solid' : 'fa-regular';
            return star + ' fa-star'
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
                <font-awesome-icon v-for="num in 5" :icon="rating(num)"></font-awesome-icon>
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
@use '../../assets/scss/partials/variables' as*;

.flag {
    width: 30px;
    height: auto;
}

article {
    color: $light-grey;
    padding: 2px;

    position: relative;
    overflow-y: auto;
    overflow-x: hidden;

    cursor: pointer;

    transition: transform ease 0.3s;
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