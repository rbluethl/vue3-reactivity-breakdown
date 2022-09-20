<script setup lang="ts">
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { onMounted } from 'vue'

interface Props {
  script: string
  template: string
}

defineProps<Props>()

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <pre class="rounded !bg-neutral-800 !py-0 !text-sm">
    <code class="language-markup !font-mono !bg-neutral-800">{{script}}</code>
    <code class="language-markup !font-mono !bg-neutral-800 ">{{template}}</code>
  </pre>
</template>
