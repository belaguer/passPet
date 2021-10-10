<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { petList } from '../modules/store.js'
import PetCard from '../components/PetCard.vue'

const petId = useRoute().params.id
const pet = ref(null)

pet.value = petList.find(pet => pet.id == petId)

</script>

<template>
  <div class="p-8 m-8 max-w-4xl mx-auto">
    <header class="mb-10">
      <router-link to="/dashboard" class="underline">
        Back to the dashboard
      </router-link>
    </header>
    <main v-if="pet" class="bg-white rounded shadow-2xl">
      <PetCard  :id="pet.id" :name="pet.name" />
    </main>
  </div>
</template>