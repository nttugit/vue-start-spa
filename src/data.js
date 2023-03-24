const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

function savePages() {
  localStorage.setItem(
    pagesKey,
    JSON.stringify(pagesStore)
  );
}

export default {
  addPage(page) {
    // pagesStore.push(page);
    savePages();
  },

  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;
    savePages();
  },

  deletePage(index) {
    pagesStore.splice(index, 1);
    savePages();
  },
};
