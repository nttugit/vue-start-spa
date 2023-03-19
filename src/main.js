import { createApp, VueElement } from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import $pages from './data';
import router from './routes';

const app = createApp(App);
// we will have a $router variable to access params
app.use(router);
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;
app.mount('#app');
