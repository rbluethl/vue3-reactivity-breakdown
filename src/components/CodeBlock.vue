<script setup lang="ts">
interface Props {
  script: string
  template: string
}

defineProps<Props>()
</script>

<template>
  <pre class="rounded !bg-neutral-800 !text-sm">
    <code class="language-markup !font-mono !bg-neutral-800">{{script}}</code>
    <code class="language-markup !font-mono !bg-neutral-800 ">{{template}}</code>
  </pre>
</template>
