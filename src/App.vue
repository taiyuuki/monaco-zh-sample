<script setup>
import { onMounted, ref } from 'vue'
import { initMonaco } from './monaco'

const $monaco = ref(null)

onMounted(async () => {
    const monaco = initMonaco()
    monaco.editor.create($monaco.value, {
        model: monaco.editor.createModel('<div>HTML</div>', 'html'),
    })
})
</script>

<template>
  <div ref="$monaco" style="width: 500px; height: 500px">
    
  </div>
</template>
