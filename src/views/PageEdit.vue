<template>
  <h4>Edit page</h4>
  <form action="">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">
            Page Title
          </label>
          <input
            type="text"
            class="form-control"
            v-model="page.pageTitle"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Content </label>
          <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="page.content"
          >
          </textarea>
        </div>
        <div class="md-3">
          <button
            class="btn btn-primary me-2"
            @click.prevent="submit"
          >
            Edit
          </button>
          <button
            class="btn btn-secondary me-2"
            @click.prevent="cancel"
          >
            Cancel
          </button>
          <button
            class="btn btn-danger me-2"
            @click.prevent="deletePage(index)"
          >
            Delete
          </button>
        </div>
      </div>

      <div class="col">
        <div class="md-3">
          <label for="" class="form-label">
            Link Text
          </label>
          <input
            type="text"
            class="form-control"
            v-model="page.link.text"
          />
        </div>
        <div class="md-3">
          <label for="" class="form-label">
            Link URL
          </label>
          <input
            type="text"
            class="form-control"
            v-model="page.link.url"
          />
        </div>
        <div class="row md-3">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="page.published"
            />
            <label for="gridCheck1" class="form-check-label"
              >Published</label
            >
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const router = useRouter();
const pages = inject('$pages');
const bus = inject('$bus');

const { index } = defineProps(['index']);

let page = pages.getSinglePage(index);

function submit() {
  pages.editPage(index, page);
  bus.$emit('page-updated', { index, page });

  goToPageList();
}

function cancel() {
  goToPageList();
}

function deletePage(index) {
  pages.deletePage(index, page);
  bus.$emit('page-deleted', { index, page });
  goToPageList();
}

function goToPageList() {
  router.push({ path: '/pages' });
}
</script>
