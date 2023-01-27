<script>
export default {
    name: 'AppHeader',
    data() { return { value: '' } },
    emits: ['submit']
}
</script>
<template>
    <header>
        <h1>BOOLFLIX</h1>
        <form @submit.prevent="$emit('submit', value)">
            <input type="text" v-model="value">
            <button>SEARCH</button>
        </form>
    </header>
</template>
<style>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>