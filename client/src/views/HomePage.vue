<template>
  <header class="m-24">
    <h1 class="text-4xl font-bold">PassPet</h1>
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
    <section class="gap-20 md:grid grid-cols-3 sm:grid-rows-3">
      <div class="card p-12 text-center border-solid border-2 border-yellow-900 border-opacity-25 shadow-md">
        <span class="block bg-black text-white -mt-16 p-1 shadow-md">Pet owner</span>
        <img class="mt-4" src="../assets/owner.png">
        <div class="dots sm:invisible md:visible">
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
        </div>
      </div>
      <div class="card p-12 text-center border-solid border-2 border-yellow-900 border-opacity-25 shadow-md">
        <span class="block bg-black text-white -mt-16 p-1 shadow-md">Veterinary</span>
        <img class="mt-4" src="../assets/vet.png">
        <div class="dots sm:invisible md:visible">
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
          <div class="dots__dot"></div>
        </div>
      </div>
      <div class="card p-12 text-center border-solid border-2 border-yellow-900 border-opacity-25 shadow-md">
        <span class="block bg-black text-white -mt-16 p-1 shadow-md">Verifier</span>
        <img class="mt-4" src="../assets/verifier.png">
      </div>
    </section>
  </main>
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