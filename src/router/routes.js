import HomePage from "pages/HomePage.vue";
import DocumentCard from "components/DocumentCard.vue";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: HomePage },
      { path: '/grid', component: DocumentCard },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
