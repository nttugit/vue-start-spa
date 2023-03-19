<template>
  <nav
    :class="[
      'navbar',
      'navbar-expand-lg',
      `navbar-${theme}`,
      `bg-${theme}`,
    ]"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- emit event from navbar-link to navbar -->
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item"
          :key="index"
          :page="page"
          :index="index"
          :isActive="activePage == index"
          @actived="$emit('actived')"
        >
        </navbar-link>

        <!-- Add link for create page -->
        <li>
          <router-link
            to="/create"
            class="nav-link"
            aria-current="page"
          >
            Create Page
          </router-link>
        </li>
      </ul>

      <form class="d-flex">
        <button
          class="btn btn-primary"
          @click.prevent="changeTheme()"
        >
          Change theme
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';
export default {
  components: {
    NavbarLink,
  },
  created() {
    this.getThemeSetting();
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  props: ['pages', 'activePage'],
  data() {
    return {
      theme: 'light',
    };
  },

  methods: {
    changeTheme() {
      this.theme = this.theme == 'dark' ? 'light' : 'dark';
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem('theme', this.theme);
    },
    getThemeSetting() {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
