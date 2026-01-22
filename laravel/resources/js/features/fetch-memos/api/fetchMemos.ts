import { ApiMemoToMemo, Memo } from "@/entities/memo/schemas";
import { useMemoStore } from "@/entities/memo/stores";
import { MEMO_API } from "@/shared/constants/urls";
import axios from "axios";
import * as v from "valibot";

const memoStore = useMemoStore();
/**
 * Laravelからメモをすべて取得する
 * @returns 取得したメモをすべて返す
 */
export async function fetchMemos(): Promise<{ success: boolean; data?: Memo[]; error?: unknown }> {
  try {
    const res = await axios.get(MEMO_API);
    const parsedMemo = v.parse(v.array(ApiMemoToMemo), res.data);
    memoStore.setMemos(parsedMemo);

    return { success: true, data: parsedMemo };
  } catch (error) {
    console.error("メモを取得できませんでした", error);
    return { success: false, error };
  }
}
