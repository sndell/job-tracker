<template>
  <div class="flex items-center justify-between text-primary">
    Interactions
    <button
      @click="handleNew"
      class="px-2 py-1 rounded-lg bg-primary text-primary"
    >
      Add interaction
    </button>
  </div>
  <div class="px-2 rounded-lg bg-primary">
    <div
      class="grid grid-cols-[1fr,10fr,1fr] py-2 gap-2 text-primaryLight text-sm"
    >
      <div>Way</div>
      <div>Summary</div>
      <div class="justify-self-end">Date</div>
    </div>
    <div class="h-[1px] rounded-lg bg-secondary"></div>
    <div
      v-if="data.GetJobInteractions.length > 0"
      v-for="(interaction, index) in data.GetJobInteractions"
      class="w-full"
    >
      <JobInteractionPreview
        :interaction="interaction"
        :select="selectInteraction"
      />
      <div
        v-if="index !== data.GetJobInteractions.length - 1"
        class="w-full h-[1px] rounded-lg bg-secondary"
      ></div>
    </div>
    <div v-else class="w-full py-2 text-center text-primary">
      No interactions found
    </div>
  </div>
  <JobInteractionModal
    v-if="selectedInteraction"
    :id="selectedInteraction"
    :close="selectInteraction"
    :refresh="refresh"
  />
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>();

const selectedInteraction = ref<string | null>(null);

const selectInteraction = (id: string | null) => {
  selectedInteraction.value = id;
};

const { data, refresh } = await useAsyncGql('GetJobInteractions', {
  id: props.id,
});

const handleNew = async () => {
  await GqlCreateInteraction({ id: props.id });
  await refresh();
};
</script>
