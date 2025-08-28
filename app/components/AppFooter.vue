<script setup lang="ts">
const appConfig = useAppConfig()

const links = computed(() => [
  ...Object.entries(appConfig.socials || {}).map(([key, url]) => ({
    'icon': `i-simple-icons-${key}`,
    'to': url,
    'target': '_blank',
    'aria-label': `${key} social link`,
  })),
  appConfig.github?.url && {
    'icon': 'i-simple-icons-github',
    'to': appConfig.github.url,
    'target': '_blank',
    'aria-label': 'GitHub repository',
  },
].filter(Boolean))
</script>

<template>
  <UFooter>
    <template #left>
      <div class="text-sm text-muted">
        Copyright © John Sweeney, 2025
      </div>
    </template>

    <template #top>
      <div class="text-sm"; style="text-align: center">
        This website is neither affiliated with, nor endorsed by, Grinding Gear Games
      </div>
    </template>

    <template #right>
      <UColorModeButton />
    </template>
  </UFooter>
</template>
