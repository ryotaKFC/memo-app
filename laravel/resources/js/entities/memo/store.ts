import { ref } from "vue";
import { defineStore } from "pinia";
import { createMemo, fetchMemos, removeMemo } from "./apis";
import { Memo } from ".";

export const useMemoStore = defineStore("memo", () => {
  const memos = ref<Memo[]>([]);

  /**
   * Laravelへ新しいメモを作成してstoreに追加する
   * @param memo
   */
  async function addMemo(memo: Omit<Memo, "id" | "createdAt">) {
    const res = await createMemo(memo);
    memos.value.unshift(res);
  }

  /**
   * Laravelからメモをすべて取得してstoreに保存する
   */
  async function getMemos() {
    const res = await fetchMemos();
    memos.value = res;
  }

  async function deleteMemo(id: number) {
    const success = await removeMemo(id);
    if (success) {
      memos.value = memos.value.filter((memo) => memo.id !== id);
    }
  }

  return {
    memos,
    addMemo,
    getMemos,
    deleteMemo,
  };
});
