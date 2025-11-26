<template>
  <div class="form-page">
    <div class="form-content">
      <!-- 表单说明 -->
      <div class="form-tip">
        <p>请准确填写以下信息，提交后我们会尽快联系你～</p>
      </div>

      <!-- 飞书表单嵌入（适配手机全屏） -->
      <div class="feishu-form-container">
        <iframe
          :src="feishuFormUrl"
          frameborder="0"
          class="feishu-form"
          scrolling="auto"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
// 👇 替换成你的飞书表单链接（必须放在英文引号里）
const feishuFormUrl = "https://ccnqqqth7gx6.feishu.cn/share/base/form/shrcnf74LWnMtPiGgNm3WHpwWtd"; 
// 示例：const feishuFormUrl = "https://fdocs.cn/s/2f8d7a9b3c4d";
</script>

<style scoped>
/* 表单页样式 */
.form-page {
  padding: 20px 15px;
  background-color: #f5f7fa;
}

/* 表单说明 */
.form-tip {
  background-color: #e8f4ff;
  color: #1890ff;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 15px;
}

/* 飞书表单容器 */
.feishu-form-container {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

/* 飞书表单（适配手机） */
.feishu-form {
  width: 100%;
  height: 580px; /* 手机端最优高度，可根据表单长度调整 */
}

/* 适配不同手机屏幕 */
@media (max-height: 667px) { /* 小屏手机（如iPhone SE） */
  .feishu-form {
    height: 520px;
  }
}

@media (min-height: 812px) { /* 大屏手机（如iPhone 13 Pro） */
  .feishu-form {
    height: 650px;
  }
}
</style>