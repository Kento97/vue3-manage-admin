<template>
  <div>
    <VHeader/>
    <VSidebar/>
    <div class="content-box">
      <div class="content">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in" appear>
            <component :is="Component"/>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import VHeader from "@/components/Header.vue";
import VSidebar from '@/components/Sidebar.vue'
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
