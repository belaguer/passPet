<script setup>
  import HomeCard from '../components/HomeCard.vue'
  import ownerImg from '../assets/owner.png'
  import vetImg from '../assets/vet.png'
  import verifierImg from '../assets/verifier.png'

  import { useRouter } from 'vue-router'

  const router = useRouter()
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    })
  }

  const pushTo = (path) => {
    router.push(path)
  }
</script>

<template>
  <header class="m-24">
    <h1 class="text-4xl font-bold">PassPet | <router-link to="/registration" class="text-green-500 underline">Create now</router-link></h1>
    <h2 class="text-8xl font-extrabold mt-4">
      Next generation passport for your pet.
    </h2>
  </header>
  <main class="px-24">
    <section class="my-8">
      <h3 class="text-center text-xl font-medium">
        Ease and secure at all stages
      </h3>
    </section>
    <section class="gap-20 grid md:grid-cols-3 md:grid-rows-1 sm:grid-rows-3">
      <HomeCard title="Pet Owner" :asset="ownerImg" dots @click="pushTo('/dashboard')" />
      <HomeCard title="Veterinary" :asset="vetImg" dots @click="scrollTo('vet-onboard')" />
      <HomeCard title="Verifier" :asset="verifierImg" @click="scrollTo('verifier-onboard')" />
    </section>
    <section class="gap-20 grid grid-rows-3 my-14 max-w-4xl">
      <div id="owner-onboard">
        <img class="onboard-icon" :src="ownerImg">
        <h4 class="text-2xl font-semibold uppercase text-green-500 my-3">For pet owner</h4>
        <h6 class="text-6xl font-extrabold mb-3">Be able to own your pet data</h6>
        <p class="text-2xl">
          "Being able to register my dog's vaccination passport on the blockchain and travel anywhere with it has changed my life." James
        </p>
      </div>
      <div id="vet-onboard">
        <img class="onboard-icon" :src="vetImg">
        <h4 class="text-2xl font-semibold uppercase text-green-500 my-3">For veterinary</h4>
        <h6 class="text-6xl font-extrabold mb-3">Sign pet passport with NFT</h6>
        <p class="text-2xl">
          "Now I can simply create an NFT with an authentified certificate! I am the most modern veterinarian in my city and I love that." Solene
        </p>
      </div>
      <div id="verifier-onboard">
        <img class="onboard-icon" :src="verifierImg">
        <h4 class="text-2xl font-semibold uppercase text-green-500 my-3">For verifier</h4>
        <h6 class="text-6xl font-extrabold mb-3">Verify with the blockchain</h6>
        <p class="text-2xl">
          "No more fraudulent passports, and I don't need to know more than necessary to verify the authenticity of the certificate, it's revolutionary!" Alexis
        </p>
      </div>
    </section>
  </main>
</template>

<style>
.onboard-icon {
  width: 50px;
  height: 50px;
}
</style>