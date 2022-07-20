<template>
  <div id="thread-root">
    <div id="thumbnail" :style="{ backgroundImage: `url('${thumbnail}')` }"></div>
    <div id="content">
      <div id="author">testsetestes</div>
      <div>content</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const thumbnail = ref<string>('https://images.unsplash.com/photo-1658266592736-299bf141c231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80');

</script>

<style lang="scss" scoped>
#thread-root {
  display:flex;
  padding:14px;
  gap:12px;
  #thumbnail {
    width:34px;
    height:34px;
    cursor:pointer;
    border-radius:4px;
    background-color:#333;
    color:#fff;
    display:flex;
    justify-content: center;
    font-weight:bold;
    font-size:14px;
    align-items: center;
    background-size:cover;
    background-position:center center;
  }

  #content {
    display:flex;
    flex-direction: column;
    gap:4px;
    #author {
      font-weight: bold;
      font-size:16px;
      cursor:pointer;
      &:hover {
        text-decoration:underline;
      }
    }

  }

  &:hover {
    background:#f4f4f4;
  }
}

</style>
