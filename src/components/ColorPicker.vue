<script setup lang="ts">
const emit = defineEmits<{
  (e: "bgChange", color: string): void;
}>();

const onColorClick = (color: string) => emit("bgChange", color);
</script>

<template>
  <div>
    <button @click="onColorClick('red')">RED</button>
    <button @click="onColorClick('blue')">BLUE</button>
  </div>
</template>
