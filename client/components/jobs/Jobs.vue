<template>
  <div class="flex flex-col flex-1 gap-2">
    <JobsHeader />
    <div class="px-2 rounded-lg bg-primary">
      <div
        class="grid grid-cols-[repeat(7,1fr)] py-2 gap-2 text-primaryLight text-sm"
      >
        <div>Company</div>
        <div>Name</div>
        <div>Phone</div>
        <div>LinkedIn</div>
        <div>Mail</div>
        <div>URL</div>
        <div class="justify-self-end">Interactions</div>
      </div>
      <div class="h-[1px] rounded-lg bg-secondary"></div>
      <div
        v-if="data.GetAllJobs.length > 0"
        v-for="(job, index) in data.GetAllJobs"
        class="w-full"
      >
        <JobPreview :job="job" />
        <div
          v-if="index !== data.GetAllJobs.length - 1"
          class="w-full h-[1px] rounded-lg bg-secondary"
        ></div>
      </div>
      <div v-else class="w-full py-2 text-center">No jobs being tracked</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql('GetAllJobs');
</script>
