<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();
</script>

<template>
  <span class="text-sm text-red-500">{{ props.message }}</span>
</template>
