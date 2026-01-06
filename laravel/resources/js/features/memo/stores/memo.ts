// stores/counter.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import v from "@/entities/valibot.ts";
import { ApiMemoToMemo, Memo } from "@/entities/memo.ts";

export const useMemoStore = defineStore("memo", () => {
  // state
  const memos = ref<Memo[]>([]);

  // メモの保存 + memos更新
  async function createMemo(memo: CreationMemo) {
    const res = await axios.post("/api/memo", memo);

    const parsedMemo = v.parse(ApiMemoToMemo, res.data);

    memos.value.unshift(parsedMemo);
  }

  async function fetchMemos() {
    const res = await axios.get("/api/memo");
    memos.value = res.data.map((item) => v.parse(ApiMemoToMemo, item));
  }

  return {
    memos,
    createMemo,
    fetchMemos,
  };
});
