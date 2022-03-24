<template>
  <div>
    <template v-for="(item, index) in menuList">
      <!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况
           情况一：有子集的情况：-->
      <el-sub-menu
          v-if="item.subs && item.subs.length > 0"
          :key="index"
          :index="item.index"
      >
         <template #title>
            {{ item.title }}
          </template>
        <TreeMenu :menuList="item.subs"></TreeMenu>
      </el-sub-menu>
      <!-- 情况二：没子集的情况： -->
      <el-menu-item v-else :key="item.index" :index="item.index">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang='ts' setup>
interface Tree {
  icon?: string,
  index?: string,
  title: string,
  subs?: Tree[]
}

interface Props {
  menuList: Tree[],
}

const props = defineProps<Props>()
const {menuList} = props
</script>
<script lang="ts">
export default {
  name: "TreeMenu"
}
</script>

