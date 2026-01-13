import { ref } from "vue";
import { defineStore } from "pinia";
import { createMemo, fetchMemos } from "./apis";
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

  return {
    memos,
    addMemo,
    getMemos,
  };
});
