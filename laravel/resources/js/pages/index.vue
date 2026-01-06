<script setup lang="ts">
import Header from "@/features/header/components/Header.vue";
import CreateMemoForm from "@/features/memo/components/CreateMemoForm.vue";
import MemoList from "@/features/memo/components/MemoList.vue";
import { onMounted } from "vue";
import { useMemoStore } from "@/features/memo/stores/memo.ts";

const memoStore = useMemoStore();

onMounted(async () => {
  await memoStore.fetchMemos();
});
</script>

<template>
  <Header />
  <main class="mx-auto max-w-2xl px-6 py-8">
    <CreateMemoForm />
    <MemoList />
  </main>
</template>
