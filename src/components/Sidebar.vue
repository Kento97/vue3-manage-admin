<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" active-text-color="#20a0ff" background-color="#324157" class="sidebar-el-menu"
      router text-color="#bfcbd9" unique-opened>
      <TreeMenu :menuList="menuList" />
    </el-menu>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Sidebar'
}
</script>
<script lang='ts' setup>
import { computed, ref, watch } from "vue";
import { useStore } from "@/stores";
import { useRoute } from "vue-router";
import TreeMenu from "@/components/TreeMenu.vue";
import { menuListData } from "@/mock/data";

const menuList = ref(menuListData)
const route = useRoute();

const onRoutes = computed(() => route.path);
const store = useStore();
const collapse = computed(() => store.collapse);
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar>ul {
  height: 100%;
}
</style>
