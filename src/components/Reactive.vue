<script setup lang="ts">
import { reactive, ref } from 'vue'
import Button from '@/components/Button.vue'
import Code from '@/components/Code.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import Example from '@/components/Example.vue'

const state = reactive({
  count: 0
})

const script = ref(`
<script setup lang="ts">
  const state = reactive({
    count: 0
  })
<\/script>`)

const template = ref(`
<template>
  <span>Count is \{\{ state.count \}\}</span>
  <button type="button" @click="state.count++">Increment</button>
</template>`)
</script>

<template>
  <Example>
    <template #title>reactive()</template>
    <template #subtitle
      >Use <Code>`reactive`</Code> to return a reactive proxy of an object. In
      this example, we keep track of the inner numeric count that we can
      decrement or increment. The reactive object itself cannot be
      reassigned.</template
    >
    <template #demo>
      <p class="text-sm font-medium">
        <span
          >Count is <Code>{{ state.count }}</Code></span
        >
      </p>

      <div class="flex items-center space-x-1">
        <Button class="mt-2" @click="state.count--">Decrement</Button>
        <Button class="mt-2" @click="state.count++">Increment</Button>
      </div>
    </template>
    <template #code>
      <CodeBlock :script="script" :template="template" />
    </template>
  </Example>
</template>
