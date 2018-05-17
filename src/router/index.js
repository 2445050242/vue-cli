import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Index from '@/pages/test/components/index'

Vue.use(Router)

const Hello = resolve => require(['../components/Hello'], resolve);
const Index = resolve => require(['../pages/test/components/index'], resolve);
const TestVuex = resolve => require(['../pages/test/components/testVuex'], resolve);
const Drag = resolve => require(['../pages/drag/components/index'], resolve);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {path: 'Home/main', component: Hello, name: '欢迎页面'}
      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Index,
      children: [
        {path: 'index', component: Hello, name: '欢迎页面'}
      ]
    },
    {
      path: '/',
      name: 'TestVuex',
      component: Index,
      children: [
        {path: 'testVuex', component: TestVuex, name: '欢迎页面'}
      ]
    },
    {
      path: '/',
      name: 'Drag',
      component: Index,
      children: [
        {path: 'drag', component: Drag, name: '测试页面'}
      ]
    }
  ]
})

export default router
