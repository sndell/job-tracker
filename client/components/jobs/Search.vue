<template>
  <div class="flex items-center rounded-lg bg-primary">
    <label for="search" class="grid h-full pl-2 pr-1 place-items-center">
      <Icon name="bx:search" color="black" />
    </label>
    <input v-model="searchString" type="text" id="search" placeholder="Search"
      class="h-full pr-2 rounded-r-lg outline-none bg-none">
  </div>
</template>

<script setup lang="ts">
const searchString = ref('')
</script>

