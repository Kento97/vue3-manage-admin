<template>
  <div class="sidebar">
    <el-menu
        :default-active="onRoutes"
        active-text-color="#20a0ff"
        background-color="#324157"
        class="sidebar-el-menu"
        router
        text-color="#bfcbd9"
        unique-opened
    >
      <TreeMenu :menuList="menuList"/>
    </el-menu>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Sidebar'
}
</script>
<script lang='ts' setup>
import {computed, ref, watch} from "vue";
import {useStore} from "@/stores";
import {useRoute} from "vue-router";
import TreeMenu from "@/components/TreeMenu.vue";

interface Tree {
  icon?: string,
  index: string,
  title: string,
  subs?: Tree[]
}

const items: Tree[] = [
  {
    icon: "HomeFilled",
    index: "/dashboard",
    title: "系统首页",
  },
  {
    icon: "Menu",
    index: "/table",
    title: "基础表格",
  },
  {
    icon: "Tickets",
    index: "/tabs",
    title: "tab选项卡",
  },
  {
    icon: "Sunset",
    index: "3",
    title: "表单相关",
    subs: [
      {
        index: "/form",
        title: "基本表单",
      },
      {
        index: "/upload",
        title: "文件上传",
      },
      {
        index: "4",
        title: "三级菜单",
        subs: [
          {
            index: "/editor",
            title: "富文本编辑器",
          },
        ],
      },
    ],
  },
  {
    icon: "Apple",
    index: "/icon",
    title: "自定义图标",
  },
  {
    icon: "Coin",
    index: "/charts",
    title: "Echarts图表",
  },
  {
    icon: "Moon",
    index: "/i18n",
    title: "国际化功能",
  },
  {
    icon: "CloseBold",
    index: "7",
    title: "错误处理",
    subs: [
      {
        index: "/permission",
        title: "权限测试",
      },
      {
        index: "/404",
        title: "404页面",
      },
    ],
  },
  {
    icon: "Avatar",
    index: "/donate",
    title: "支持作者",
  },
]
const menuList = ref(items)
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

.sidebar > ul {
  height: 100%;
}
</style>
