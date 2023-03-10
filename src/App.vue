<script setup lang="ts">
import { ref } from "vue";
import PersonCard from "./components/PersonCard.vue";
import { IPeople } from "./models/People.interface";

const peopleList: IPeople[] = [
  { name: "Ana", lastName: "García", age: 32, email: "anita@gmail.com" },
  { name: "Pedro", lastName: "López", age: 22, email: "pedri@gmail.com" },
  { name: "Diego", lastName: "Martínez", age: 27, email: "diegs@gmail.com" },
  { name: "Claudia", lastName: "Ruiz", age: 29, email: "clau9@gmail.com" },
];

const clickedUser = ref<number | undefined>();
</script>

<template>
  <div>
    <p @click="clickedUser = 0" class="name">{{ peopleList[0].name }}</p>
    <p @click="clickedUser = 1" class="name">{{ peopleList[1].name }}</p>
    <p @click="clickedUser = 2" class="name">{{ peopleList[2].name }}</p>
    <p @click="clickedUser = 3" class="name">{{ peopleList[3].name }}</p>
    <div v-if="clickedUser !== undefined">
      <PersonCard :user="peopleList[clickedUser]" />
    </div>
  </div>
</template>
