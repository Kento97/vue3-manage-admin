<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="plugins-tips">
        wangEditor：轻量级 web 富文本编辑器，配置方便，使用简单。
        访问地址：
        <a href="https://www.wangeditor.com/doc/" target="_blank">wangEditor</a>
      </div>
      <div ref='editor' class="mgb20"></div>
      <el-button type="primary" @click="syncHTML" plain>提交</el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import WangEditor from "wangEditor";
import {ref, reactive, onMounted, onBeforeUnmount} from "vue";

const editor = ref(null);
const content = reactive({
  html: "",
  text: "",
});
let instance;
onMounted(() => {
  instance = new WangEditor(editor.value);
  instance.config.zIndex = 1;
  instance.create();
});
onBeforeUnmount(() => {
  instance.destroy();
  instance = null;
});
const syncHTML = () => {
  content.html = instance.txt.html();
  console.log(content.html);
};
</script>

<style scoped>

</style>
