<template>
  <h4>Pages</h4>
  <div class="text-end">
    <router-link to="/pages/create" class="btn btn-primary">
      New page
    </router-link>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>Is Published</th>
        <!-- <th>Action</th> -->
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page, index) in pages.getAllPages()"
        :key="index"
        @click="goToPage(index)"
      >
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? 'yes' : 'no' }}</td>
        <!-- <td>
          <button
            class="btn btn-danger btn-delete-page"
            @click="deletePage(index)"
          >   
            Delete
          </button>
        </td> -->
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const pages = inject('$pages');
const router = useRouter();

function goToPage(index) {
  router.push({ path: `pages/${index}/edit` });
}

// function deletePage(index) {
//   pages.deletePage(index);
//   alert('Are you sure you want to delete?');
//   router.push({ path: `pages` });
// }
</script>

<style scoped>
.table.table-hover tr:hover {
  cursor: pointer;
}

.btn-delete-page {
  z-index: 1;
}
</style>
