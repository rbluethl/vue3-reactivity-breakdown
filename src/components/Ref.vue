<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import Code from '@/components/Code.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import Example from '@/components/Example.vue'

const count = ref(0)

const script = ref(`
<script setup lang="ts">
  const count = ref(0)
<\/script>`)

const template = ref(`
<template>
  <span>Count is \{\{ count \}\}</span>
  <button type="button" @click="count++">Increment</button>
</template>`)
</script>

<template>
  <Example>
    <template #title>ref()</template>
    <template #subtitle
      >Use <Code>`ref`</Code> to wrap any value into a reactive object. In this
      example, we keep track of a numeric value that we can decrement or
      increment.</template
    >
    <template #demo>
      <p class="text-sm font-medium">
        <span
          >Count is <Code>{{ count }}</Code></span
        >
      </p>

      <div class="flex items-center space-x-1">
        <Button class="mt-2" @click="count--">Decrement</Button>
        <Button class="mt-2" @click="count++">Increment</Button>
      </div>
    </template>
    <template #code>
      <CodeBlock :script="script" :template="template" />
    </template>
  </Example>
</template>
