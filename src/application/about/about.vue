<template>
  <div class="bg">
    <a-layout id="components-layout-demo-basic">
      <a-layout-sider width="40%">
        <img src="../../assets/anemia_1.png">
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <StarOutlined />
        </a-layout-header>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
html,body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.ant-layout-sider,.ant-layout-header,.ant-layout{
  background-color: #F3CD05;
}
#components-layout-demo-basic .ant-layout-sider img {
  min-height: 100%;
  width: 100%;
}
#components-layout-demo-basic {
  text-align: center;
  height: 100vh;
  width: 100%;
}
#components-layout-demo-basic .ant-layout-header{
  color: #fff;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

</style>