<template>
  <u-i-layout>
    <channel-header channel-name="# test" />
    <div>
      <thread-item v-for="(i) in 6" :key="`thread-${i}`" />
    </div>

    <div class="input-group">
      <label for="content">
        <textarea id="content"></textarea>
      </label>
    </div>
  </u-i-layout>
</template>

<script lang="ts" setup>
import UILayout from '@/components/UILayout.vue';
import ChannelHeader from '@/components/channel/ChannelHeader.vue';
import ThreadItem from '@/components/thread/ThreadItem.vue';
</script>

<style lang="scss" scoped>
.input-group {
  position:fixed;
  bottom:0;
  width:100%;
  padding:12px;
  border-top:1px solid #ddd;
  box-sizing: border-box;

  textarea {
    border:1px solid #ddd;
    border-radius:4px;
    width:100%;
  }
}
</style>
