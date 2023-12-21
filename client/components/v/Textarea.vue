<template>
  <div class="flex flex-col w-full gap-1">
    <label v-if="label" :for="name" class="text-sm">{{ label }}</label>
    <textarea
      :v-model="value"
      :name="name"
      @change="handleChange"
      @blur="handleBlur($event, true)"
      :type="type"
      :placeholder="placeholder"
      class="w-full px-2 py-1 rounded-lg outline-none text-primary"
      :class="{
        'bg-primary': color === 'primary',
        'bg-background': color === 'secondary',
      }"
    />
    <div class="text-sm">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    placeholder?: string;
    type?: 'email' | 'password' | 'text';
    label?: string;
    color?: 'primary' | 'secondary';
  }>(),
  { type: 'text', color: 'primary' }
);

const { value, errorMessage, handleBlur, handleChange } = useField(
  () => props.name,
  undefined
);
</script>
