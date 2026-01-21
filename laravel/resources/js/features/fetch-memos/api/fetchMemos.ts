import { ApiMemoToMemo, Memo } from "@/entities/memo/schemas";
import { useMemoStore } from "@/entities/memo/stores";
import { BASEURL } from "@/shared/constans/urls";
import axios from "axios";
import * as v from "valibot";

const memoStore = useMemoStore();
/**
 * Laravelからメモをすべて取得する
 * @returns 取得したメモをすべて返す
 */
export async function fetchMemos(): Promise<Memo[]> {
  try {
    const res = await axios.get(BASEURL);
    const parsedMemo = v.parse(v.array(ApiMemoToMemo), res.data);
    memoStore.setMemos(parsedMemo);

    return parsedMemo;
  } catch (error) {
    console.error("メモを取得できませんでした", error);
    throw error;
  }
}
