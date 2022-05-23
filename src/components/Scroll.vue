<template>
    <vue3-seamless-scroll :list="list" class="scroll">
        <div class="item" v-for="(item, index) in list" :key="index">
            <span>{{ item.title }}</span>
            <span>{{ item.date }}</span>
        </div>
    </vue3-seamless-scroll>
</template>

<script lang='ts' setup>
import { ref } from '@vue/reactivity';

const list = ref([
    {
        title: "Vue3.0 无缝滚动组件展示数据第1条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第2条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第3条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第4条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第5条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第6条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第7条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第8条",
        date: Date.now(),
    },
    {
        title: "Vue3.0 无缝滚动组件展示数据第9条",
        date: Date.now(),
    },
]);
</script>

<style scoped>
.scroll {
    height: 270px;
    width: 500px;
    margin: 0 auto;
    overflow: hidden;
}

.scroll .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 0;
}
</style>