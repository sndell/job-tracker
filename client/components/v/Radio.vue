<template>
  <div class="w-full">
    <div class="flex gap-2">
      <input
        :value="value"
        :checked="defaultChecked ? true : checked"
        :name="name"
        :id="value"
        @change="handleChange"
        type="radio"
      />
      <label :for="value" class="text-primary">{{ label }}</label>
    </div>
    <div class="text-sm">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  defaultChecked?: boolean;
  value: string;
  label?: string;
}>();
const { errorMessage, checked, handleChange, setValue } = useField(
  () => props.name,
  undefined,
  {
    type: 'radio',
    checkedValue: props.value,
  }
);

if (props.defaultChecked) setValue(props.value);
</script>
