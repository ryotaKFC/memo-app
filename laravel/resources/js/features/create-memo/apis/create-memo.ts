import axios from "axios";
import * as v from "valibot";
import { ApiMemoToMemo, CreationMemo } from "@/entities/memo";
import { useMemoStore } from "@/entities/memo";
import { MEMO_API } from "@/constants/urls";

const memoStore = useMemoStore();

/**
 * Laravelにメモを作成し、作成したメモはstoreに追加する
 * @param newMemo
 * @returns
 */
export async function createMemo(
  newMemo: CreationMemo,
): Promise<{ success: boolean; message?: string; error?: unknown }> {
  try {
    const res = await axios.post(MEMO_API, newMemo);
    const parsedMemo = v.parse(ApiMemoToMemo, res.data);
    memoStore.addMemo(parsedMemo);
    return { success: true };
  } catch (error) {
    console.error("メモを作成できませんでした", error);
    return { success: false, error };
  }
}
