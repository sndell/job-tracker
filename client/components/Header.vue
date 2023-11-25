<template>
  <div class="flex justify-center px-2 bg-secondary">
    <div class="flex-1 max-w-6xl grid grid-cols-[1fr,auto,1fr] text-primary">
      <div />
      <div>Welcome, {{ user?.username }}</div>
      <div class="justify-self-end">
        <Nav />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { user } = useUserStore()

</script>
