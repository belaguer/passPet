<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getNFT, downloadData, hashData, verifyHash } from '../modules/services.js'
import verifierImg from '../assets/verifier.png'

const nftID = useRoute().params.id
const isValid = ref(false)

const checkIsValid = async (id) => {
  const nft = await getNFT(id)
  const data = await downloadData(nft.dataURI)
  const hash = await hashData(data)
  const validation = await verifyHash(hash)
  isValid.value = validation
}

checkIsValid(nftID)
</script>

<template>
  <div class="bg-white rounded shadow-2xl p-8 m-8 max-w-4xl mx-auto">
    <header class="mb-24">
      <h1 class="text-xl font-bold uppercase">Passpet verification</h1>
    </header>
    <main v-if="isValid">
      <h2 class="text-lg text-center text-green-500">This passpet is valid</h2>
      <img class="mx-auto" :src="verifierImg" height="200px">
    </main>
    <main v-else>
      <h2 class="text-lg text-center text-red-500">This passpet is invalid</h2>
      <img class="mx-auto" :src="verifierImg" height="200px">
    </main>
  </div>
</template>