<script setup lang="ts">
import { useMemoStore } from "@/entities/memo";
import { onMounted } from "vue";
import SiteHeader from "@/components/SiteHeader.vue";
import CreateMemoForm from "@/features/memo-create/components/CreateMemoForm.vue";
import MemoList from "@/features/memo-list/components/MemoList.vue";

const memoStore = useMemoStore();

onMounted(async () => {
  await memoStore.getMemos();
});
</script>

<template>
  <SiteHeader />
  <main class="mx-auto max-w-2xl space-y-12 px-6 py-8">
    <CreateMemoForm />
    <MemoList />
  </main>
</template>
