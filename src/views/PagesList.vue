<template>
  <h3>{{ data.counter }}</h3>
  <button @click.prevent="() => (data.counter += 2)">
    Click me
  </button>
</template>

<script setup>
import { ref, reactive } from 'vue';
// const counter = ref(0);
const data = reactive({ counter: 0 });
function click() {
  data.counter++;
}
</script>
