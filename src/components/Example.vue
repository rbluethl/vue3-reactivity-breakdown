<script setup lang="ts">
import Title from '@/components/Title.vue'
import Subtitle from '@/components/Subtitle.vue'
</script>

<template>
  <div class="space-y-8">
    <div>
      <Title><slot name="title"></slot></Title>
      <Subtitle><slot name="subtitle"></slot></Subtitle>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Demo</h3>
      <slot name="demo"></slot>
    </div>

    <div>
      <h3 class="mb-2 font-semibold">Example</h3>
      <slot name="code"></slot>
    </div>
  </div>
</template>
