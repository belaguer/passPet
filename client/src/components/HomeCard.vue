<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    title: { type: String, required: false, default: '' },
    dots: { type: Boolean, required: false, default: false },
    asset: { type: String, required: false, default: '' }
  })

  const hovering = ref(false)
</script>

<template>
  <div 
    class="card p-12 text-center border-solid border-2 border-yellow-900 border-opacity-25 cursor-pointer"
    :class="{'shadow-md': !hovering, 'shadow-2xl': hovering}"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  >
    <span class="block bg-black text-white -mt-16 p-1 shadow-md">{{ props.title }}</span>
    <img class="mt-4" :src="asset">
    <div v-if="props.dots" class="dots sm:invisible md:visible">
      <div class="dots__dot"></div>
      <div class="dots__dot"></div>
      <div class="dots__dot"></div>
      <div class="dots__dot"></div>
      <div class="dots__dot"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes moveInOutX {
0% {
    transform: translateX(-10px);
}
100% {
    transform: translateX(5px);
}
}
.card{
  background-color: #EAE0C9;
  position: relative;
}
.dots__dot {
	width: 5px;
	height: 5px;
	margin: 5px;
	display: inline-block;
	border-radius: 99px;
	background-color: #00a672;
	-webkit-animation: moveInOutX .3s linear infinite;
	animation: moveInOutX .3s linear infinite;
}
.dots {
	width: 85px;
	overflow: hidden;
	white-space: nowrap;
  line-height: 0;
  left: 100%;
  top: 50%;
}
.card .dots {
  position: absolute;
}
</style>