<template>
  <div id="container">
    <div class="logo">
      <img src="@/assets/dotread.svg" alt="">
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountLayout',
});
</script>

<style scoped lang="scss">
#container {
  background:#fff;
  width:560px;
  margin:0 auto;

  .logo {
    margin:32px 0;
  }
}
body {
  background:var(--gray-bg-color);
}
</style>
