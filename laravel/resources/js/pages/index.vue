<script setup lang="ts">
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import CreateMemoForm from "@/features/create-memo/components/CreateMemoForm.vue";
import MemoList from "@/features/memo-list/components/MemoList.vue";
</script>

<template>
  <SiteHeader />
  <main class="mx-auto max-w-2xl space-y-12 px-6 py-8">
    <CreateMemoForm />
    <MemoList />
  </main>
  <SiteFooter />
</template>
