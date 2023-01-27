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
