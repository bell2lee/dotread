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
    <va-input
      class="mb-4"
      v-model="confirmPassword"
      type="password"
      placeholder="Confirm Password"
    />
    <va-input
      class="mb-4"
      v-model="nickname"
      placeholder="Display Name"
    />
    <va-button size="large" class="mr-4 mb-2">Large</va-button>
  </account-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountLayout from '@/components/AccountLayout.vue';

export default defineComponent({
  name: 'SignupView',
  components: {
    AccountLayout,
  },
  data: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  }),

});
</script>

<style scoped>

</style>
