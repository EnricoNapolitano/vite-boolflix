<script>
export default {
    name: 'InputSearch',
    data() { return { value: '' } },
    emits: ['submit']
}
</script>
<template>
    <form @submit.prevent="$emit('submit', value)">
        <input type="text" v-model="value">
        <button>SEARCH</button>
    </form>
</template>
