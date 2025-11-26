<template>
  <div class="app-container">
    <!-- 顶部标题栏（类似公众号顶部） -->
    <div class="top-bar">
      <h2 class="bar-title">项目合作平台</h2>
    </div>

    <!-- 页面内容区域（占满中间空间） -->
    <div class="content-container">
      <router-view />
    </div>

    <!-- 底部固定按钮栏（类似公众号菜单栏） -->
    <div class="bottom-tabbar">
      <button 
        @click="goToIntro" 
        :class="currentRoute === 'Intro' ? 'tab-btn active' : 'tab-btn'"
      >
        <span class="btn-icon">📝</span>
        <span class="btn-text">简介</span>
      </button>
      <button 
        @click="goToForm" 
        :class="currentRoute === 'Form' ? 'tab-btn active' : 'tab-btn'"
      >
        <span class="btn-icon">📋</span>
        <span class="btn-text">申请表</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
const route = useRoute();

// 当前激活的路由（用于按钮高亮）
const currentRoute = ref(route.name);

// 监听路由变化，更新按钮高亮
watch(
  () => route.name,
  (newName) => {
    currentRoute.value = newName;
  }
);

// 跳转到简介页
const goToIntro = () => {
  router.push('/');
};

// 跳转到表单页
const goToForm = () => {
  router.push('/form');
};
</script>

<style scoped>
/* 全局容器：占满手机屏幕 */
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f5f7fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 顶部标题栏（公众号风格） */
.top-bar {
  height: 50px;
  background-color: #1890ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

/* 内容区域：占满中间空间，可滚动 */
.content-container {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 60px; /* 给底部按钮栏留空间，避免内容被遮挡 */
}

/* 底部按钮栏（固定在底部） */
.bottom-tabbar {
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

/* 底部按钮样式 */
.tab-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #666;
  font-size: 14px;
  width: 50%;
  height: 100%;
}

/* 按钮激活状态（高亮） */
.tab-btn.active {
  color: #1890ff;
}

/* 按钮图标 */
.btn-icon {
  font-size: 20px;
  margin-bottom: 4px;
}
</style>