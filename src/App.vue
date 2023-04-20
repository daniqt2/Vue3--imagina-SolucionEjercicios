<script setup lang="ts">
import { ref } from 'vue'

const searchVal = ref('')
</script>

<template>
    <h1>My last deploy</h1>
    <div>
        <input v-model="searchVal" />
        <p v-highlight="searchVal">Playa</p>
        <p v-highlight="searchVal">Fernanda</p>
        <p v-highlight="searchVal">Pelota</p>
        <p v-highlight="searchVal">Rama</p>
    </div>
</template>

<style scoped>
.highlight {
    color: red;
}
</style>
