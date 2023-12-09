<template>
  <div v-if="label" class="flex flex-col w-full gap-1">
    <div class="text-sm text-primary">{{ label }}</div>
    <div v-for="(option, index) in options">
      <VRadio
        :name="name"
        :value="option.value"
        :label="option.label"
        :default-checked="defaultChecked && true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  label?: string;
  options: { value: string; label?: string; defaultChecked?: boolean }[];
}>();
</script>
