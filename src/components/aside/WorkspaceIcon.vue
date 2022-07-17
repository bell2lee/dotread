<template>
  <div class="workspace-icon-root">
    <div class="notification" v-if="notification">{{notification}}</div>
    <div :class="{ 'workspace-icon-wrap': true, active }">
      <div
        :class="{'workspace-icon': true, active }"
        :style="{ backgroundImage: `url('${thumbnailUrl}')` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  thumbnailUrl: String,
  notification: Number,
  active: Boolean,
});
</script>

<style lang="scss" scoped>
.workspace-icon-root {
  position:relative;
  .workspace-icon-wrap {
    .workspace-icon {
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: cover;
      width: 42px;
      height: 42px;
      border-radius: 4px;
      border: 1px solid #ddd;
      &.active {
        border:4px solid transparent;
        width: 46px;
        height: 46px;
      }
    }
    &.active {
      border-radius: 8px;
      border:4px solid #ddd;
    }
  }

  .notification {
    position:absolute;
    right:-4px;
    top:-4px;
    color:#fff;
    font-size:10px;
    border-radius: 12px;
    padding:4px;
    background:red;
    font-weight:bold;
  }
}
</style>
