<template>
  <header class="channel-header-root">
    <h1 class="page-title">{{channelName}}</h1>
  </header>
  <div class="quick-menu">
    <div class="quick-item">
      <va-icon name="push_pin" size="small" /> 0개 고정됨
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  channelName: string,
}>();

</script>

<style scoped lang="scss">
.channel-header-root {
  border-bottom:1px solid #ddd;
  padding:12px 14px;

  .page-title {
    font-size:16px;
  }
}

.quick-menu {
  border-bottom:1px solid #ddd;
  padding:12px 14px;
  font-size:12px;
  display:flex;
  .quick-item {
    cursor:pointer;
    border-radius:4px;
    padding:4px;
    color:#333;
    &:hover {
      background-color:#f4f4f4;
    }
    transition: .3s;
  }
}
</style>
