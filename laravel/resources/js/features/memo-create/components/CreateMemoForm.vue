<script setup lang="ts">
import { useCreateMemoForm } from "../composable/useCreateMemoForm";
import PlusSvg from "@/components/svgs/PlusSvg.vue";

const { content, error, isSubmitted, submit, setMemoContent } = useCreateMemoForm();
</script>

<template>
  <div class="rounded-lg bg-white p-6 shadow-lg">
    <h2 class="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
      <PlusSvg />
      新しいメモ
    </h2>
    <form @submit.prevent="submit" class="space-y-4">
      <span v-if="error" class="text-sm text-red-500">
        {{ error }}
      </span>
      <textarea
        @input="setMemoContent"
        @keydown.enter.exact.prevent="submit"
        :value="content"
        placeholder="メモを入力してください...&#10;（Enterで保存、Shift+Enterで改行）"
        class="border-gray w-full resize-none rounded-lg border px-4 py-6 text-gray-700 outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500"
        rows="4"
      />
      <button
        type="submit"
        :disabled="!!error || !content || isSubmitted"
        class="flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        <PlusSvg class="text-white" />
        メモを保存
      </button>
    </form>
  </div>
</template>

<style scoped></style>
