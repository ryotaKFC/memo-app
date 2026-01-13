import axios from "axios";
import { ApiMemoToMemo, Memo } from "./schemas";
import { ref } from "vue";
import v from "@/entities/valibot.ts";
import { defineStore } from "pinia";

export const useMemoStore = defineStore("memo", () => {
  const memos = ref<Memo[]>([]);

  // ToDo: API周りは別ファイルに切り出す
  async function createMemo(memo: Omit<Memo, "id" | "createdAt">) {
    const res = await axios.post("/api/memo", memo);

    const parsedMemo = v.parse(ApiMemoToMemo, res.data);
    memos.value.unshift(parsedMemo);
  }

  async function fetchMemos() {
    const res = await axios.get("/api/memo");
    const parsed = v.parse(v.array(ApiMemoToMemo), res.data);
    memos.value = parsed;
  }

  return {
    memos,
    createMemo,
    fetchMemos,
  };
});
