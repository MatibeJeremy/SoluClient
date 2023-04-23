import Vue from "vue";
import VueRouter from "vue-router";
import Register from '@/components/Register';

Vue.use(VueRouter)



const routes = [
  {
    path: "/home",
    component: DashboardLayout,
    redirect: "/sign-in",
    meta:{
      requiresAuth: true
    },
    children: [
      {
        path: "tasks",
        name: "tasks",
        component: Tasks,
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {

  // check if the route requires authentication and user is not logged in
  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
    // redirect to login page
    next({ name: 'sign-in' })
    return
  }

  // if logged in redirect to tasks
  if(to.path === '/sign-in' && store.state.isLoggedIn) {
    next({ name: 'tasks' })
    return
  }

  next()
})
// //check for unauthorized access
// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })
export default router