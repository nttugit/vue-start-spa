<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['index'],
  inject: ['$pages'],
  created() {
    // Second way: pass 'props' into route, and use watchers
    let pageIndex = this.index || 0;
    this.page = this.$pages.getSinglePage(pageIndex);

    // First way: watchers (as a method)
    // this.$watch(
    //   () => this.$route.params,
    //   (newParams, prevParams) => {
    //     this.page = this.$pages.getSinglePage(
    //       newParams.index
    //     );
    //   }
    // );
  },
  data() {
    return {
      page: null,
    };
  },
  watch: {
    index(newIndex, oldIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
};
</script>
<style scoped>
.emphasize {
  color: blue !important;
}
</style>
