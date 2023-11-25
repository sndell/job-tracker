<template>
  <AuthLogin v-if="mode === 'login'" :toggle-mode="toggleMode" />
  <AuthRegister v-else :toggle-mode="toggleMode" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' });

const mode = ref<'login' | 'register'>('login');

const toggleMode = () => {
  mode.value = mode.value === 'login' ? 'register' : 'login';
};
</script>
