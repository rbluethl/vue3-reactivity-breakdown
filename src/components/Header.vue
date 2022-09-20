<script setup lang="ts">
import Link from '@/components/Link.vue'
</script>

<template>
  <header class="mb-12">
    <h1 class="text-3xl font-bold">Vue 3 Reactivity Breakdown</h1>
    <p class="mt-2 text-sm text-neutral-400">
      <span
        >Breaking down the power of the
        <Link
          href="https://vuejs.org/api/reactivity-core.html"
          text="Vue 3 Reactivity API"
        ></Link>
        using
        <Link
          href="https://vuejs.org/guide/typescript/overview.html"
          text="TypeScript"
        ></Link>
        and
        <Link
          href="https://vuejs.org/api/sfc-script-setup.html"
          text="script setup"
        ></Link
        >.</span
      ><br />
      <span>Built by </span>

      <Link href="https://twitter.com/rbluethl" text="@rbluethl"></Link>

      <span>, code on </span>
      <Link
        href="https://github.com/rbluethl/vue3-reactivity-breakdown"
        text="GitHub"
      ></Link
      >.
    </p>
  </header>
</template>
