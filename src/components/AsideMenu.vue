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
    <div>
      <div class="channel-list">
        <h2>빠른 탐색</h2>
        <va-list>
          <va-list-item
            v-for="(menu, index) in quickMenus"
            :key="`channel-${index}`"
          >
            <va-list-item-section>
              # {{menu.name}}
            </va-list-item-section>
          </va-list-item>
        </va-list>
      </div>
      <div class="channel-list">
        <h2>channel</h2>
        <va-list>
          <va-list-item
            v-for="(channel, index) in channels"
            :key="`channel-${index}`"
          >
            <va-list-item-section>
              # {{channel.name}}
            </va-list-item-section>
          </va-list-item>
        </va-list>
      </div>
    </div>

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
  id: 'id-dds',
  name: 'The Dotio',
  thumbnailUrl: 'https://images.unsplash.com/photo-1657989910099-476bd0c8c156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  notification: 3,
}]);
const channels = ref([
  { id: 'test', name: 'test', isPrivate: false },
]);
const quickMenus = ref([]);
</script>

<style scoped lang="scss">

.aside-root {
  display:flex;
}

#workspaces-root {
  padding:14px 8px;
  height:calc(100vh - 48px);
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

.channel-list {
  width:100%;

  h2 {
    font-size:12px;
    padding:12px 0 0 12px;
    margin:0;
  }
}
</style>
