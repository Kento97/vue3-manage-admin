<template>
  <div class="error-page">
    <div class="error-code">4<span>0</span>4</div>
    <div class="error-desc">啊哦~ 你所访问的页面不存在</div>
    <div class="error-handle">
      <router-link to="/">
        <el-button size="large" type="primary" plain>返回首页</el-button>
      </router-link>
      <el-button class="error-btn" size="large" type="primary" @click="goBack" plain>返回上一页</el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {useRouter} from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  box-sizing: border-box;
}
.error-code {
  line-height: 1;
  font-size: 250px;
  font-weight: bolder;
  color:hotpink;
}
.error-code span {
  color: deepskyblue;
}
.error-desc {
  font-size: 30px;
  color: #777;
}
.error-handle {
  margin-top: 30px;
  padding-bottom: 200px;
}
.error-btn {
  margin-left: 100px;
}
</style>