<template>
  <div
    @click="handleClick"
    class="grid grid-cols-[repeat(7,1fr)] py-1 hover:bg-secondary rounded-lg cursor-pointer transition-colors gap-2 my-1 overflow-hidden max-w-full"
  >
    <div class="w-full overflow-hidden text-primary">
      {{ job.companyName || '-' }}
    </div>
    <div class="w-full overflow-hidden text-primary">
      {{ job.contactPerson || '-' }}
    </div>
    <div class="w-full overflow-hidden text-primary">
      {{ job.contactPhone || '-' }}
    </div>
    <div class="w-full overflow-hidden text-primary">
      {{ job.contactLinkedIn || '-' }}
    </div>
    <div class="w-full overflow-hidden text-primary">
      {{ job.contactEmail || '-' }}
    </div>
    <div class="w-full overflow-hidden text-primary">
      {{ job.companyWebsite || '-' }}
    </div>
    <div class="w-full overflow-hidden text-primary justify-self-end">
      {{ job.interations?.length || '0' }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  job: {
    companyName?: string | null;
    companyWebsite?: string | null;
    contactEmail?: string | null;
    contactLinkedIn?: string | null;
    contactPerson?: string | null;
    contactPhone?: string | null;
    interations?: string[] | null;
    id?: string;
  };
}>();

const handleClick = () => {
  navigateTo(`/${props.job.id}`);
};
</script>
