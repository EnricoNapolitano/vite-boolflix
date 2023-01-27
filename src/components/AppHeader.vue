<script>
import InputSearch from './generics/InputSearch.vue';
export default {
    name: 'AppHeader',
    data() { return { value: '' } },
    components: { InputSearch },
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
        <input-search @submit="srcSubmit"></input-search>
    </header>
</template>
<style>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>