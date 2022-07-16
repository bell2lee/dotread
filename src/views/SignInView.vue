<template>
  <account-layout>
    <va-input
      class="mb-4"
      v-model="email"
      placeholder="Email"
    />
    <va-input
      class="mb-4"
      v-model="password"
      type="password"
      placeholder="Password"
    />
    <va-button size="large" class="mr-4 mb-2">Large</va-button>
  </account-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountLayout from '@/components/AccountLayout.vue';

type State = {
  email: string,
  password: string,
};

export default defineComponent({
  name: 'SignInView',
  components: { AccountLayout },
  data: (): State => ({
    email: '',
    password: '',
  }),
});
</script>

<style scoped>

</style>
