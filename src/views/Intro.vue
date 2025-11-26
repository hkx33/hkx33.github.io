<template>
  <div class="intro-page">
    <div class="intro-content">
      <!-- 头像/Logo区域（可选，类似公众号头像） -->
      <div class="avatar-container">
        <div class="avatar">🤝</div>
      </div>

      <!-- 简介标题 -->
      <h1 class="intro-title">项目合作平台</h1>

      <!-- 简介内容 -->
      <div class="intro-desc">
        <p>我们专注于提供优质的xxx服务（替换成你的业务描述），致力于为合作伙伴创造价值。</p>
        <p class="mt-4">如果您有合作意向、咨询需求或其他问题，欢迎通过底部「申请表」提交信息，我们会在1-3个工作日内与您联系！</p>
      </div>

      <!-- 联系方式（可选） -->
      <div class="contact-info mt-8">
        <p class="contact-title">📞 联系我们</p>
        <p class="contact-text">电话：xxx-xxxx-xxxx</p>
        <p class="contact-text">邮箱：xxx@xxx.com</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑，纯展示
</script>

<style scoped>
/* 简介页样式 */
.intro-page {
  padding: 30px 20px;
  background-color: #f5f7fa;
}

/* 头像区域 */
.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #1890ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  box-shadow: 0 4px 10px rgba(24, 144, 255, 0.3);
}

/* 标题 */
.intro-title {
  font-size: 22px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
}

/* 简介内容 */
.intro-desc {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  text-align: left;
}

/* 联系方式 */
.contact-info {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.contact-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
  font-weight: 500;
}

.contact-text {
  font-size: 15px;
  color: #666;
  margin-bottom: 8px;
}

.mt-4 {
  margin-top: 16px;
}

.mt-8 {
  margin-top: 32px;
}
</style>