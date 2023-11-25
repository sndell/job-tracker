<template>
  <div class="flex flex-col w-full">
    <input :v-model="value" @change="handleChange" @blur="handleBlur($event, true)" :type="type"
      :placeholder="placeholder" class="w-full px-2 py-1 rounded-lg outline-none" />
    <div class="text-sm">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string; placeholder?: string, type: 'email' | 'password' | 'text' }>();

const { value, errorMessage, handleBlur, handleChange } = useField(() => props.name, undefined)
</script>
