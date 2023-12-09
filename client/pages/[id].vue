<template>
  <div v-if="job" class="flex flex-col gap-2">
    <JobHeader />
    <div class="p-2 bg-primary rounded-xl">
      <JobDetails :job="job" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const job = ref<Job | null>(null)

const { data } = await useAsyncGql('GetJobById', { id: route.params.id as string });
if (!data.value) navigateTo('/')
else job.value = data.value.GetJobById;


</script>
