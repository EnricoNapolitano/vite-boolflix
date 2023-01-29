<template>
    <div class="placeholder">
        <figure>
            <img src="../assets/img/popcorn.png" alt="popcorn">
        </figure>
        <div>
            <span>Pronti i popcorn?</span>
            <div>Inizia la tua ricerca</div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.placeholder {
    padding-top: 100px;
    text-align: left;

    display: flex;
    align-items: center;

    figure {
        padding-right: 50px;
        width: 410px;

        img {
            width: 100%;
        }
    }

    span {
        color: $light-grey;
        font-size: 9rem;
        font-weight: 900;
        line-height: 80px;
    }

    div {
        padding-top: 24px;
        color: white;
        font-size: 5rem;
        font-weight: 900;
    }
}
</style>