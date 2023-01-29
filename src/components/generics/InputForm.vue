<script>
export default {
    name: 'InputForm',
    data() { return { value: '' } },
    props: { placeholder: String, text: String },
    emits: ['submit', 'type']
}
</script>
<template>
    <form @submit.prevent="$emit('submit')">
        <input type="text" v-model.trim="value" @keyup="$emit('type', value)" :placeholder="placeholder || 'cerca'">
        <button> {{ text || 'INVIA' }}</button>
    </form>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as*;

input {
    width: 300px;
    height: 30px;
    padding-left: 20px;
    border: 1px solid white;
}

button {
    height: 30px;
    margin: 10px;

    font-weight: 900;

    color: white;
    background-color: transparent;
    border: 1px solid white;

    cursor: pointer;

    &:active {
        background-color: white;
        color: $black;
    }
}
</style>
