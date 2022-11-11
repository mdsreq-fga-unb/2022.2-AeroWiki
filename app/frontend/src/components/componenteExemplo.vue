<template>
  <q-input
    v-model="xxx"
    label="novoInput"
    type="number"
    dense
    filled
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { QInput } from 'quasar';
const xxx = ref(undefined);
</script>
