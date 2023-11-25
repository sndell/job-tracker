<template>
  <nav>
    <button @click="handleLogout" class="text-primary hover:text-primaryDark">Logout</button>
  </nav>
</template>

<script setup lang="ts">
const { logout } = await useAuth()

const handleLogout = async () => {
  await logout()
  navigateTo('/auth')
}
</script>
