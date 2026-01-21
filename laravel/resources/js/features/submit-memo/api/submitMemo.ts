import axios from "axios";
import { BASEURL } from "@/shared/constans/urls";
import * as v from "valibot";
import { ApiMemoToMemo, CreationMemo } from "@/entities/memo/schemas";
import { useMemoStore } from "@/entities/memo/stores";

const memoStore = useMemoStore();

/**
 * Laravelにメモを作成し、作成したメモはstoreに追加する
 * @param newMemo
 * @returns
 */
export async function submitMemo(newMemo: CreationMemo): Promise<void> {
  try {
    const res = await axios.post(BASEURL, newMemo);
    const parsedMemo = v.parse(ApiMemoToMemo, res.data);
    memoStore.addMemo(parsedMemo);
  } catch (error) {
    console.error("メモを作成できませんでした", error);
    throw error;
  }
}
