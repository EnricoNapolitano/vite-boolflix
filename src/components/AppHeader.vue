<script>
import InputForm from './generics/InputForm.vue';
export default {
    name: 'AppHeader',
    data() { return { value: '', placeholder: 'cerca un titolo', btnText: 'CERCA' } },
    components: { InputForm },
    emits: ['submit'],
    methods: {
        srcSubmit(par) {
            this.$emit('submit', par)
        }
    }
}
</script>
<template>
    <header>
        <h1>BOOLFLIX</h1>
        <input-form @submit="srcSubmit" :placeholder="placeholder" :text="btnText"></input-form>
    </header>
</template>
<style>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>