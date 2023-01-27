<script>
import InputForm from './generics/InputForm.vue';
export default {
    name: 'AppHeader',
    data() { return { value: '', placeholder: 'cerca un titolo', btnText: 'CERCA' } },
    components: { InputForm },
    emits: ['submit', 'type'],
    methods: {
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
        <h1>BOOLFLIX</h1>
        <input-form @submit="srcSubmit" @type="onTyping" :placeholder="placeholder" :text="btnText"></input-form>
    </header>
</template>
<style>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>