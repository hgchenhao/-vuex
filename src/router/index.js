import Vue from 'vue'
import Router from 'vue-router'
import other from '@/components/other'
const hello = (resolve) => {
  import('@/components/hello').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello,
      children:[
        {
          path: ':id',
          component: other
        }
      ]
    }
  ]
})
