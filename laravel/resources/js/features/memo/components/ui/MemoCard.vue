<script setup lang="ts">
import { Memo } from "@/features/memo/types";

const props = defineProps<{
  memo: Memo;
}>();
</script>

<template>
  <div
    class="group rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1">
        <p class="whitespace-pre-wrap leading-relaxed text-gray-800">{{ props.memo.content }}</p>
        <p class="mt-3 text-xs text-gray-400">{{ props.memo.createdAt }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
