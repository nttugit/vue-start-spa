<template>
  <div class="container">
    <h1 class="emphasize">Page Title</h1>
    <p>content</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$route.params;
    console.log(
      '🚀 ~ file: PageViewer.vue:13 ~ created ~ this.$route.params:',
      this.$route.params
    );
  },
};
</script>
<style scoped>
.emphasize {
  color: blue !important;
}
</style>
