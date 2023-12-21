<template>
  <div class="flex items-center justify-between">
    <div
      @click="navigateTo('/')"
      class="flex items-center py-1 pl-1 pr-2 cursor-pointer bg-primary rounded-xl"
    >
      <Icon name="bx:chevron-left" class="text-primary" />
      Back
    </div>
    <div class="flex gap-2">
      <button
        @click="handleDelete"
        class="px-2 py-1 bg-secondary text-primary rounded-xl"
      >
        Delete
      </button>
      <button
        type="submit"
        form="detailsForm"
        class="px-2 py-1 bg-primary rounded-xl text-primary"
      >
        Update
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>();

const handleDelete = async () => {
  try {
    await GqlDeleteJob({
      id: props.id,
    });

    navigateTo('/');
  } catch (err) {
    console.error(err);
  }
};
</script>
