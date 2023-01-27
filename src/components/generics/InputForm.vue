<script>
export default {
    name: 'InputForm',
    data() { return { value: undefined } },
    props: { placeholder: String, text: String },
    emits: ['submit']
}
</script>
<template>
    <form @submit.prevent="$emit('submit', value)">
        <input type="text" v-model="value" :placeholder="placeholder || 'cerca'">
        <button> {{ text || 'INVIA' }}</button>
    </form>
</template>
