<template>
  <a
    class="inline-flex items-center space-x-1 py-0.5 font-medium text-emerald-500 hover:text-emerald-600"
    :href="href"
    target="_blank"
  >
    <span>{{ text }}</span>
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string
  text: string
}

defineProps<Props>()
</script>
