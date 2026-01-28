<script setup lang="ts">
import { SiteHeader } from "@/widgets/site-header";
import { SiteFooter } from "@/widgets/site-footer";
import { CreateMemoForm } from "@/widgets/create-memo-form";
import { MemoList } from "@/widgets/memo-list";
</script>

<template>
  <SiteHeader />
  <main class="mx-auto max-w-2xl space-y-12 px-6 py-8">
    <CreateMemoForm />
    <MemoList />
  </main>
  <SiteFooter />
</template>
