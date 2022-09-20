<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from '@/components/Button.vue'
import Code from '@/components/Code.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import Example from '@/components/Example.vue'

const count = ref(0)
const double = computed(() => count.value * 2)

const script = ref(`
<script setup lang="ts">
  const count = ref(0)
  const double = computed(() => count.value * 2)
<\/script>`)

const template = ref(`
<template>
  <span>Count is \{\{ count \}\}</span>
  <span>Double is \{\{ double \}\}</span>
  <button type="button" @click="count++">Increment</button>
</template>`)
</script>

<template>
  <Example>
    <template #title>computed()</template>
    <template #subtitle
      >Use <Code>`computed`</Code> to compute a readonly reactive value. In this
      example, we compute the double of the value.</template
    >
    <template #demo>
      <p class="text-sm font-medium">
        <span
          >Count is <Code>{{ count }}</Code></span
        >
        <br />
        <span
          >Double is <Code>{{ double }}</Code></span
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
