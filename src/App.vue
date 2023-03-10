<script setup lang="ts">
import { ref } from "vue";
import ColorPicker from "./components/ColorPicker.vue";

const bgColor = ref("");

const changeBg = (color: string) => (bgColor.value = color);
</script>

<template>
  <div :class="[bgColor]" class="bg">
    <ColorPicker @bg-change="changeBg" />
  </div>
</template>

<style>
.bg {
  height: 200px;
  width: 200px;
  padding: 10px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>
