<script setup lang="ts">
const props = defineProps<{
  count: number | string;
}>();
</script>

<template>
  <span class="rounded-full bg-orange-100 px-3 py-1 text-sm text-gray-500">
    {{ props.count }} 件
  </span>
</template>

<style scoped></style>
