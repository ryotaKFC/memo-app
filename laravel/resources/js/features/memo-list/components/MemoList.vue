<script setup lang="ts">
import DocumentSvg from "@/components/svgs/DocumentSvg.vue";
import { computed } from "vue";
import { useMemoStore } from "@/entities/memo";
import MemoCard from "../components/MemoCard.vue";
import MemoCountBadge from "../components/MemoCountBadge.vue";
import EmptyState from "./EmptyState.vue";

const memoStore = useMemoStore();
const memos = computed(() =>
  [...memoStore.memos].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  ),
);
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="flex items-center gap-2 text-lg font-semibold text-gray-800">
        <DocumentSvg size="24" class="text-primary-500" />
        保存されたメモ
      </h2>
      <MemoCountBadge :count="memos.length" />
    </div>

    <div v-for="memo in memos" :key="memo.id">
      <MemoCard :memo="memo" />
    </div>

    <EmptyState v-if="memos.length === 0" />
  </section>
</template>

<style scoped></style>
