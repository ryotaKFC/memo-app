<script setup lang="ts">
import DocumentSvg from "@/components/svgs/DocumentSvg.vue";
import MemoCountBadge from "@/features/memo/components/ui/MemoCountBadge.vue";
import { useMemoStore } from "@/features/memo/stores/memo.ts";
import { computed } from "vue";
import MemoCard from "@/features/memo/components/ui/MemoCard.vue";
import { Memo } from "@/entities/memo.ts";

const memoStore = useMemoStore();
const memos: Memo[] = computed(() =>
  [...memoStore.memos].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  ),
);
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="flex items-center gap-2 text-lg font-semibold text-gray-800">
        <DocumentSvg size="24" />
        保存されたメモ
      </h2>
      <MemoCountBadge :count="memos.length" />
    </div>

    <div v-for="memo in memos" :key="memo.id">
      <MemoCard :memo="memo" />
    </div>
  </section>
</template>

<style scoped></style>
