import axios from "axios";
import v from "@/entities/valibot.ts";
import { ApiMemoToMemo, CreationMemo, Memo } from "./schemas";
import { BASEURL } from "@/constans/urls";

/**
 * Laravelからメモをすべて取得する
 * @returns 取得したメモをすべて返す
 */
export async function fetchMemos(): Promise<Memo[]> {
  try {
    const res = await axios.get(BASEURL);
    const parsedMemo = v.parse(v.array(ApiMemoToMemo), res.data);
    return parsedMemo;
  } catch (error) {
    console.error("メモを取得できませんでした", error);
    throw error;
  }
}

/**
 * Laravelへ新しいメモを作成する
 * @param newMemo
 * @returns 追加したメモ一件を返す
 */
export async function createMemo(newMemo: CreationMemo): Promise<Memo> {
  try {
    const res = await axios.post(BASEURL, newMemo);
    const parsedMemo = v.parse(ApiMemoToMemo, res.data);
    return parsedMemo;
  } catch (error) {
    console.error("メモを作成できませんでした", error);
    throw error;
  }
}

/**
 * 指定されたIDのメモを削除する
 * @param id
 * @returns 削除が成功したかどうか
 */
export async function removeMemo(id: number): Promise<boolean> {
  try {
    await axios.delete(`${BASEURL}/${id}`);
    return true;
  } catch (error) {
    console.error("メモを削除できませんでした", error);
    throw error;
  }
}
