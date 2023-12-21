<template>
  <button @click="addJob" class="px-2 rounded-lg bg-primary">Add job</button>
</template>

<script setup lang="ts">
const addJob = async () => {
  const { createJob } = await useJobs();
  try {
    const id = await createJob();
    navigateTo(id);
    console.log(id);
  } catch (err) {
    console.error(err);
  }
};
</script>
