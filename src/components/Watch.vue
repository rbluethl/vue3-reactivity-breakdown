<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from '@/components/Button.vue'
import Code from '@/components/Code.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import Example from '@/components/Example.vue'

const count = ref(0)
const previous = ref<number | null>(null)

watch(count, (_val, oldVal) => {
  // Set previous value whenever count changes
  previous.value = oldVal
})

const script = ref(`
<script setup lang="ts">
  const count = ref(0)
  const previous = ref<number | null>(null)

  watch(count, (_val, oldVal) => {
    // Set previous value whenever count changes
    previous.value = oldVal
  })
<\/script>`)

const template = ref(`
<template>
  <span>Count is \{\{ count \}\}</span>
  <span>Previous is \{\{ previous ?? 'uncertain' \}\}</span>
  <button type="button" @click="count++">Increment</button>
</template>`)
</script>

<template>
  <Example>
    <template #title>watch()</template>
    <template #subtitle
      >Use <Code>`watch`</Code> to watch a reactive data source and call a
      function whenever the value changes. In this example, we store the
      previous value whenever the value changes.</template
    >
    <template #demo>
      <p class="text-sm font-medium">
        <span
          >Count is <Code>{{ count }}</Code></span
        >
        <br />
        <span
          >Previous is <Code>{{ previous ?? 'uncertain' }}</Code></span
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
