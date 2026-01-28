<script setup lang="ts">
import DeleteButton from "@/features/delete-memo/components/DeleteButton.vue";
import { ref } from "vue";
import { formatDate } from "@/utils/formatDate";
import { Memo } from "@/entities/memo/schemas";

const props = defineProps<{
  memo: Memo;
}>();

const isHovered = ref(false);
</script>

<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="group rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1">
        <p class="whitespace-pre-wrap leading-relaxed text-gray-800">{{ props.memo.content }}</p>
        <p class="mt-3 text-xs text-gray-400">{{ formatDate(props.memo.createdAt) }}</p>
      </div>
      <DeleteButton v-if="isHovered" :id="props.memo.id" />
    </div>
  </div>
</template>

<style scoped></style>
