<script setup>
  import { ref } from 'vue'

  const defaultForm = {
    owner: {
      name: 'James',
      address: 'Paris',
      phone: '06'
    },
    pet: {
      name: 'Satoshi',
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

  const form = ref(defaultForm)

  const confirm = () => {
    console.log(form)
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
            <input class="border py-2 px-3 text-grey-800" name="owner-name" v-model="form.owner.name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Address</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Phone Number</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section>
        <h2 class="text-center text-green-500 my-4">Description of animal</h2>
        <form>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-name">Name</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Species</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Breed</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section>
        <h2 class="text-center text-green-500 my-4">Marking of animal</h2>
        <form>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-name">Transponder Code</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Date of reading</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Location of transponder</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section>
        <h2 class="text-center text-green-500 my-4">Vaccination Against Rabies</h2>
        <form>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-name">Vaccine Name</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-name">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-address">Batch Number</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-address">
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="owner-phone">Vaccination Date</label>
            <input class="border py-2 px-3 text-grey-800" name="owner-phone">
          </div>
        </form>
      </section>
      <section>
        <button class="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto px-10 py-4 rounded" @click="confirm">
          Confirm
        </button>
      </section>
    </main>
  </div>
</template>