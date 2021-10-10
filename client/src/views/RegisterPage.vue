<script setup>
  import { ref, nextTick } from 'vue'
  import { encryptData, storeData, mintNFT } from '../modules/services.js'
  import QrcodeVue from 'qrcode.vue'

  const defaultForm = {
    owner: {
      name: '',
      address: '',
      phone: ''
    },
    pet: {
      name: '',
      species: '',
      breed: ''
    },
    marking: {
      transponderCode: '',
      transponderLocation: '',
      readingDate: ''
    },
    vaccine: {
      name: '',
      batch: '',
      date: ''
    }
  }

  let qr = ref(null)
  const form = ref(defaultForm)

  const confirm = async () => {
    // encrypt data
    const encryptedData = await encryptData(form)

    // upload encrypted data on ipfs
    const dataURI = await storeData(encryptData)

    // mint the NFT
    const nftAddress = await mintNFT('pub_key', 'signature', dataURI)


    qr.value = window.location.origin + '/#/check/' + nftAddress
    await nextTick()
    document.getElementById('qr-code').scrollIntoView({
      behavior: "smooth"
    })
  }
</script>

<template>
  <div class="bg-white rounded shadow-2xl p-8 m-8 max-w-4xl mx-auto">
    <header>
      <h1 class="text-xl font-bold uppercase">Pet registration</h1>
    </header>
    <main class="grid grid-cols-1">
      <section>
        <h2 class="text-center text-green-500 my-4">Details of ownership</h2>
        <form>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-name">Fullname</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-name" v-model="form.owner.name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Address</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Phone Number</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section>
        <h2 class="text-center text-green-500 my-4">Description of animal</h2>
        <form>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-name">Name</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Species</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Breed</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section>
        <h2 class="text-center text-green-500 my-4">Marking of animal</h2>
        <form>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-name">Transponder Code</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Date of reading</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Location of transponder</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section>
        <h2 class="text-center text-green-500 my-4">Vaccination Against Rabies</h2>
        <form>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-name">Vaccine Name</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Batch Number</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Vaccination Date</label>
            <input :disabled="qr" class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section v-if="!qr">
        <button class="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto px-10 py-4 rounded" @click="confirm">
          Confirm
        </button>
      </section>
      <section v-if="qr">
        <qrcode-vue 
          id="qr-code"
          class="mx-auto my-10"
          :value="qr"
          size="250"
          level="H"
          foreground="#78350F"
          background="#EAE0C9"
        />
        <h2 class="text-center text-green-500 my-4">QR code to present to the verifier</h2>
      </section>
    </main>
  </div>
</template>