// stores/counter.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { CreationMemo, Memo } from "@/features/memo/types";
import axios from "axios";
import * as v from "valibot";
import { MemoSchema } from "@/features/memo/schemas";

export const useMemoStore = defineStore("memo", () => {
  // state
  const memos = ref<Memo[]>([]);

  // メモの保存 + memos更新
  async function createMemo(memo: CreationMemo) {
    const res = await axios.post<Memo>("/memo/store", memo);
    const newMemo: Memo = {
      content: res.data.content,
      createdAt: res.data.created_at,
    };

    const parsed = v.parse(MemoSchema, newMemo);
    memos.value.unshift(parsed);
  }

  return {
    memos,
    createMemo,
  };
});
