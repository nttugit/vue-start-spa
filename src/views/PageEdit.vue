<template>
  <h4>Edit {{ route.params.index }}</h4>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const props = defineProps(['index']);
</script>
