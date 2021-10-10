<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { petList } from '../modules/store.js'
import PetCard from '../components/PetCard.vue'
</script>

<template>
  <div class="rounded p-8 m-8 max-w-4xl mx-auto">
    <header class="mb-24">
      <h1 class="text-3xl font-bold uppercase">James Dashboard</h1>
    </header>
    <main class="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
      <template v-for="pet in petList" :key="pet.id">
        <router-link :to="'/pet/' + pet.id">
          <PetCard class="bg-white" :name="pet.name" :id="pet.id" />
        </router-link>
      </template>
    </main>
  </div>
</template>