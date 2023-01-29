<script>
import InputForm from './generics/InputForm.vue';
export default {
    name: 'AppHeader',
    data() { return { value: '', placeholder: 'cerca un titolo', btnText: 'CERCA' } },
    components: { InputForm },
    emits: ['submit', 'type'],
    methods: {

        /*sending through emits the actions 'submit' and
        'keyup' (with relative's value) to App */
        srcSubmit() {
            this.$emit('submit')
        },
        onTyping(value) {
            this.$emit('type', value)
        }
    }
}
</script>
<template>
    <header>
        <div class="container">
            <h1><a href="#">BOOLFLIX</a></h1>
            <input-form @submit="srcSubmit" @type="onTyping" :placeholder="placeholder" :text="btnText"></input-form>
        </div>
    </header>
</template>
<style lang="scss">
@use '../assets/scss/partials/variables' as*;

header {
    background-color: black;

    position: sticky;

    h1 {
        a {
            color: $red;
            cursor: pointer;
        }
    }

    div {
        margin: 0 auto;
        height: 55px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>