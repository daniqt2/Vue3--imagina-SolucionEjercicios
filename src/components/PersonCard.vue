<script setup lang="ts">
import { IPeople } from "../models/People.interface";

const props = defineProps<{ user: IPeople }>();
</script>
<template>
  <h1>USUARIO:</h1>
  <p>NAME: {{ user.name }} {{ user.lastName }}</p>
  <p>AGE: {{ user.age }}</p>
</template>
