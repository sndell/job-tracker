<template>
  <div class="flex items-center justify-between">
    <div
      class="flex items-center py-1 pl-1 pr-2 cursor-pointer bg-primary rounded-xl"
    >
      <Icon name="bx:chevron-left" class="text-primary" />
      Back
    </div>
    <div class="flex gap-2">
      <button class="px-2 py-1 bg-secondary text-primary rounded-xl">
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

<script setup lang="ts"></script>
