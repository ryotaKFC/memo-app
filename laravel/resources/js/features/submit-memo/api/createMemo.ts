import axios from "axios";
import { MEMO_API } from "@/shared/constants/urls";
import * as v from "valibot";
import { ApiMemoToMemo, CreationMemo } from "@/entities/memo/schemas";
import { useMemoStore } from "@/entities/memo/stores";

const memoStore = useMemoStore();

/**
 * Laravelにメモを作成し、作成したメモはstoreに追加する
 * @param newMemo
 * @returns
 */
export async function submitMemo(
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
