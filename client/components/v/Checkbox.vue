<template>
  <div class="w-full">
    <div class="flex gap-2">
      <input :value="true" :checked="checked" @change="handleChange" type="checkbox" />
      <div>{{ label }}</div>
    </div>
    <div class="text-sm">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string; label?: string }>();
const { errorMessage, checked, handleChange } = useField(() => props.name, undefined, {
  type: 'checkbox',
  checkedValue: true,
})
</script>