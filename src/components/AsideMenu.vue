<template>
  <div class="aside-root">
    <div id="workspaces-root">
      <div
        v-for="(workspace, index) in workspaces"
        :key="`my-workspace-${index}`"
        class="workspace-menu"
      >
        <workspace-icon
          :notification="workspace.notification"
          :thumbnailUrl="workspace.thumbnailUrl"
          :active="workspace.active"
        />
      </div>
      <div class="add-workspace">
        <va-icon name="add" />
      </div>
    </div>
    <div>list</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkspaceIcon from '@/components/aside/WorkspaceIcon.vue';

const workspaces = ref([{
  id: 'id-dd',
  name: 'The Dotio',
  thumbnailUrl: 'https://images.unsplash.com/photo-1657989910099-476bd0c8c156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  active: true,
},
{
  id: 'id-dd',
  name: 'The Dotio',
  thumbnailUrl: 'https://images.unsplash.com/photo-1657989910099-476bd0c8c156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  notification: 3,
}]);
// export default defineComponent({
//   name: 'AsideMenu',
//   data: () => ({
//     workspaces: [
//       {
//         id: 'id-dd',
//         name: 'The Dotio',
//         thumbnailUrl: 'https://images.unsplash.com/photo-1657989910099-476bd0c8c156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
//         active: true,
//       },
//       {
//         id: 'id-dd',
//         name: 'The Dotio',
//         thumbnailUrl: 'https://images.unsplash.com/photo-1657989910099-476bd0c8c156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
//       },
//     ],
//   }),
// });
</script>

<style scoped lang="scss">

.aside-root {
  display:flex;
}

#workspaces-root {
  padding:14px;
  height:calc(100vh - 58px);
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:16px;
  border-right:1px solid #ddd;
  .workspace-menu {
    .thumbnail {
      background-repeat: no-repeat;
      background-size:cover;
      width:42px;
      height:42px;
      border-radius:4px;
    }
  }

  .add-workspace {
    width:42px;
    height:42px;
    border-radius:4px;
    border:4px dotted #ddd;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#ddd;
    cursor:pointer;
  }
}
</style>
