<script setup>
  import { ref } from 'vue'
  import QrcodeVue from 'qrcode.vue'

  const props = defineProps({
    name: { type: String, required: true, default: '' },
    id: { type: Number, required: true }
  })

  const qr = window.location.origin + '/#/check/' + props.id

  const hovering = ref(false)
</script>

<template>
  <div 
    class="card p-12 text-center border-solid border-2 border-yellow-900 border-opacity-25 cursor-pointer"
    :class="{'shadow-md': !hovering, 'shadow-2xl': hovering}"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  >
    <span class="block bg-black text-white -mt-16 p-1 shadow-md">{{ props.name }}</span>
    <qrcode-vue 
      id="qr-code"
      class="mx-auto my-10"
      :value="qr"
      size="150"
      level="H"
      foreground="#78350F"
      background="#EAE0C9"
    />
  </div>
</template>