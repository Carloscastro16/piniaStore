import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentList from '../views/StudentList.vue'
import StudentDetails from '../views/StudentDetails.vue'
import AddStudent from '../views/AddStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/studentlist',
      name: 'StudentList',
      component: StudentList
    },
    {
      path: '/students/:id',
      name: 'StudentDetails',
      component: StudentDetails
    },
    {
      path: '/add',
      name: 'AddStudent',
      component: AddStudent
    }
  ]
})

export default router
