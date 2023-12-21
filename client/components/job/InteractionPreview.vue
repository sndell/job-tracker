<template>
  <div
    @click="select(interaction.id)"
    class="grid grid-cols-[1fr,10fr,1fr] py-1 my-1 transition-colors cursor-pointer rounded-lg gap-2 text-primary overflow-hidden hover:bg-secondary transit"
  >
    <div class="w-full overflow-hidden text-primary">
      {{ interaction.way || 'null' }}
    </div>
    <div class="w-full overflow-hidden text-primary">
      {{ interaction.summary || 'null' }}
    </div>
    <div class="w-full overflow-hidden justify-self-end text-primary">
      <ClientOnly>
        {{ new Date(interaction.time).toLocaleDateString() }}
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ interaction: Interaction; select: (id: string) => void }>();
</script>
