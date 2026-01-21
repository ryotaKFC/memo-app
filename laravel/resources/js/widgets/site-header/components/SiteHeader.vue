<!-- コンポーネント名Headerだとmulti-word-component-names警告がでるためこの名前 -->
<script setup lang="ts">
import DocumentSvg from "@/shared/components/svgs/DocumentSvg.vue";
</script>

<template>
  <header class="border-b border-orange-100 bg-white p-6 shadow-md">
    <div class="mx-auto text-center">
      <h1 class="flex items-center justify-center gap-3 text-3xl font-bold text-primary-500">
        <DocumentSvg />
        かんたんメモ
      </h1>
      <p class="mt-2 text-sm text-gray-600">思いついたことをサッと記録しよう</p>
    </div>
  </header>
</template>

<style scoped></style>
