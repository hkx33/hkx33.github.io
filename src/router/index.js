import { createRouter, createWebHistory } from 'vue-router';
// 导入首页和表单页
import Intro from '../views/Intro.vue';
import Form from '../views/Form.vue';

// 路由规则：路径对应页面
const routes = [
  {
    path: '/',          // 根路径（打开项目默认显示的页面）
    name: 'Intro',
    component: Intro    // 对应首页Intro.vue
  },
  {
    path: '/form',      // 表单页路径（访问 /form 会显示表单）
    name: 'Form',
    component: Form     // 对应表单页Form.vue
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;