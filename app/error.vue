<script setup lang="ts">
const error = useError()
const route = useRoute()

if (route.path !== '/') {
  clearError({ redirect: '/' })
}
</script>

<template>
</template>
