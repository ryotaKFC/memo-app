import { ref } from "vue";
import { defineStore } from "pinia";
import { Memo } from "../schemas";

export const useMemoStore = defineStore("memo", () => {
  const memos = ref<Memo[]>([]);

  /**
   * 新しいメモをstoreに追加する
   * @param newMemo 新しいメモ
   */
  function addMemo(newMemo: Memo) {
    memos.value.unshift(newMemo);
  }

  /**
   * storeのメモを新しいメモの配列で置き換える
   * @param newMemos 新しいメモの配列
   */
  function setMemos(newMemos: Memo[]) {
    memos.value = newMemos;
  }

  function deleteMemoById(memoId: number) {
    memos.value = memos.value.filter((memo) => memo.id !== memoId);
  }

  return {
    memos,
    addMemo,
    setMemos,
    deleteMemoById,
  };
});
