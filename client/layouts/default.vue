<template>
  <div class="flex flex-col min-h-screen pb-2 max-h-dscreen bg-background">
    <Header />
    <div class="flex justify-center w-full p-2">
      <div class="flex-1 max-w-6xl">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
