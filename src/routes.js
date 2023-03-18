import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // optional param: index?
    { path: '/:index?', component: PageViewer },
    { path: '/create', component: CreatePage },
  ],
});

export default router;
