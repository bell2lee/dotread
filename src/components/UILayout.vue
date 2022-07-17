<template>
  <header id="main-header">
    <div class="search-bar">해당 Workspace에 검색</div>
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

<script lang="ts">
import { defineComponent } from 'vue';
import AsideMenu from '@/components/AsideMenu.vue';

type State = {
  searchValue: string,
};

export default defineComponent({
  name: 'UILayout',
  components: {
    AsideMenu,
  },

  data: (): State => ({
    searchValue: '',
  }),
});
</script>

<style scoped lang="scss">

#main-header {
  -ms-overflow-style: scrollbar;
  -webkit-app-region:drag;
  background:#fff;
  height:58px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-bottom:1px solid #ddd;

  .search-bar {
    width:320px;
    border-radius:4px;
    border:1px solid #ddd;
    padding:14px;
    color:#333;
  }
}

#body {
  display:flex;
  height:calc(100vh - 58px);

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
