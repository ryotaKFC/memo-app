<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: string | number;
  }>(),
  {
    size: 32,
  },
);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-sticky-note"
  >
    <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path>
    <path d="M15 3v4a2 2 0 0 0 2 2h4"></path>
  </svg>
</template>
