<template>
  <u-i-layout>
    <channel-header channel-name="# test" />
    <div>
      <thread-item v-for="(i) in 6" :key="`thread-${i}`" />
    </div>
  </u-i-layout>
</template>

<script lang="ts" setup>
import UILayout from '@/components/UILayout.vue';
import ChannelHeader from '@/components/channel/ChannelHeader.vue';
import ThreadItem from '@/components/thread/ThreadItem.vue';
</script>
