<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Button from '@/components/Button.vue'
import Code from '@/components/Code.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import Example from '@/components/Example.vue'

const count = ref(0)

watchEffect(() => {
  if (count.value !== 0 && count.value % 2 === 0) {
    alert(`Count is ${count.value}`)
  }
})

const script = ref(`
<script setup lang="ts">
  const count = ref(0)

  watchEffect(() => {
    if (count.value !== 0 && count.value % 2 === 0) {
      alert(\`Count is ${count.value}\`)
    }
  })
<\/script>`)

const template = ref(`
<template>
  <span>Count is \{\{ count \}\}</span>
  <button type="button" @click="count++">Increment</button>
</template>`)
</script>

<template>
  <Example>
    <template #title>watchEffect()</template>
    <template #subtitle
      >Use <Code>`watchEffect`</Code> to run a function whenever the value of a
      dependency changes. In this example, we display an alert whenever the
      value divided by 2 is 0. Note that the alert is displayed
      <span class="italic">before</span> the updated value is display in the UI.
      This is because of the default <Code>flush: pre</Code> setting of
      watchEffect. See <Code>`watchPostEffect`</Code> and
      <Code>`watchSyncEffect`</Code> to call the function after or during the UI
      is updated.
    </template>
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
