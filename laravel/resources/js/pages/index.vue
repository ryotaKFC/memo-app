<script setup lang="ts">
import SiteFooter from "@/widgets/site-footer/components/SiteFooter.vue";
import SiteHeader from "@/widgets/site-header/components/SiteHeader.vue";
import CreateMemoForm from "@/widgets/create-memo-form/components/CreateMemoForm.vue";
import MemoList from "@/widgets/memo-list/components/MemoList.vue";
</script>

<template>
  <SiteHeader />
  <main class="mx-auto max-w-2xl space-y-12 px-6 py-8">
    <CreateMemoForm />
    <MemoList />
  </main>
  <SiteFooter />
</template>
