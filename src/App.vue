<script setup lang="ts">
import { ref } from 'vue'

const searchVal = ref('')
</script>

<template>
    <div>
        <h1>MY LAST DEPLOY</h1>
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
