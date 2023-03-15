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
        <li
          v-for="(page, index) in pages"
          class="nav-item"
          :key="index"
        >
          <navbar-link
            :page="page"
            :isActive="activePage == index"
            @click.prevent="navLinkClick(index)"
          >
          </navbar-link>
        </li>
      </ul>

      <form class="d-flex">
        <button
          class="btn btn-primary"
          @click.prevent="changeTheme()"
        >
          Change navbar theme
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
  props: ['pages', 'activePage', 'navLinkClick'],
  data() {
    return {
      theme: 'light',
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme == 'dark' ? 'light' : 'dark';
    },
  },
};
</script>
