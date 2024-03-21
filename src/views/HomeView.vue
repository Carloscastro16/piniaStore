<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <main>
    <h2>
      {{ counterStore.count }}
    </h2>

    <button @click="counterStore.increment">Agregar valor</button>
  </main>
</template>
