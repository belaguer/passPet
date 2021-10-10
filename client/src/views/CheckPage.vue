<script>
import { ref } from 'vue'

const isValid = ref(false)

const checkIsValud = () => {
  isValid.value = true
}
</script>

<template>
  Verifier Page
</template>