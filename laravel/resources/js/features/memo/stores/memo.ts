// stores/counter.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { CreationMemo, Memo } from "@/features/memo/types";
import axios from "axios";
import * as v from "valibot";
import { ApiMemoSchema, MemoSchema } from "@/features/memo/schemas";
import { toMemo } from "@/features/memo/utils/memoConverter.ts";

export const useMemoStore = defineStore("memo", () => {
  // state
  const memos = ref<Memo[]>([]);

  // メモの保存 + memos更新
  async function createMemo(memo: CreationMemo) {
    const res = await axios.post("/memo/store", memo);

    const apiMemo = v.parse(ApiMemoSchema, res.data);

    const newMemo: Memo = {
      id: apiMemo.id,
      content: apiMemo.content,
      createdAt: apiMemo.created_at,
    };

    const parsed = v.parse(MemoSchema, newMemo);
    memos.value.unshift(parsed);
  }

  async function fetchMemos() {
    const responses = await axios.get("/api/memo");
    const apiMemos = responses.data.map((res) => v.parse(ApiMemoSchema, res));
    memos.value = apiMemos.map((apiMemo) => toMemo(apiMemo));
  }

  return {
    memos,
    createMemo,
    fetchMemos,
  };
});
