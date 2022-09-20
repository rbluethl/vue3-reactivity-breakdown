<script setup lang="ts">
import Header from '@/components/Header.vue'
import Divider from '@/components/Divider.vue'
import Ref from '@/components/Ref.vue'
import Computed from '@/components/Computed.vue'
import Watch from '@/components/Watch.vue'
import WatchEffect from '@/components/WatchEffect.vue'
</script>

<template>
  <main class="mx-auto h-full w-full max-w-5xl px-4 py-8 md:px-8 md:py-16">
    <Header></Header>

    <Ref></Ref>

    <Divider></Divider>

    <Computed></Computed>

    <Divider></Divider>

    <Watch></Watch>

    <Divider></Divider>

    <WatchEffect></WatchEffect>
  </main>
</template>
