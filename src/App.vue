<template>
  <navbar :pages="pages" :active-page="activePage">
  </navbar>
  <router-view></router-view>
  <!-- <div v-show="false">Hide this content</div>

  <page-viewer
    v-if="pages.length > 0"
    :page="pages[activePage]"
  >
  </page-viewer>

  <create-page @page-created="pageCreated"> </create-page> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage,
  },
  created() {
    this.getPages();
    // Listen event from navbar-link
    this.$bus.$on('navbarLinkActived', (index) => {
      this.activePage = index;
    });
  },
  data() {
    return {
      activePage: 0,
      pages: [], // this.getPages(),
    };
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();
      this.pages = data;
      // tuantu init data (only one time)
      // localStorage.setItem('pages', JSON.stringify(data));
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
      return true;
    },
  },
};
</script>
