<script setup lang="ts">
import EmptyState from "./EmptyState.vue";
import { computed, onMounted } from "vue";
import { useMemoStore } from "@/entities/memo";
import MemoCard from "./MemoCard.vue";
import DocumentSvg from "@/components/svgs/DocumentSvg.vue";
import { fetchMemos } from "@/features/fetch-memos";
import MemoCountBadge from "@/widgets/memo-list/components/MemoCountBadge.vue";

const memoStore = useMemoStore();
onMounted(async () => {
  await fetchMemos();
});

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
