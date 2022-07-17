<template>
  <header id="main-header">
    <div />
    <div class="search-bar">해당 Workspace에 검색</div>
    <div class="profile">
      <div
        class="profile-icon"
        :style="{ backgroundImage: `url('${profileImage}')` }"
      ></div>
      <div class="profile-state"></div>
    </div>
  </header>
  <div id="body">
    <div class="aside">
      <aside-menu />
    </div>
    <div class="viewer">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AsideMenu from '@/components/AsideMenu.vue';
import { ref } from 'vue';

const searchValue = ref<string>('');
const profileImage = ref<string>('https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80');

</script>

<style scoped lang="scss">

#main-header {
  -ms-overflow-style: scrollbar;
  -webkit-app-region:drag;
  background:#fff;
  height:48px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #ddd;

  .search-bar {
    width:320px;
    border-radius:4px;
    border:1px solid #ddd;
    padding:8px 14px;
    font-size:12px;
    color:#333;
  }

  .profile {
    margin-right:8px;
    position:relative;
    .profile-icon {
      cursor:pointer;
      border-radius:4px;
      width:32px;
      height:32px;
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
    .profile-state {
      position:absolute;
      right:-4px;
      bottom:-4px;
      width:12px;
      height:12px;
      background: #008c24;
      border:3px solid #fff;
      box-sizing: content-box;
      border-radius:12px;
    }
  }

}

#body {
  display:flex;
  height:calc(100vh - 48px);

  .aside {
    background:#fff;
    width:320px;
    border-right:1px solid #ddd;
    flex:1;
    height:inherit;
  }

  .viewer {
    width:calc(100% - 320px);
    background:#fff;
  }
}

</style>
