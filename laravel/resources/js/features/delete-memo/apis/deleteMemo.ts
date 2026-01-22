import { useMemoStore } from "@/entities/memo/stores";
import { MEMO_API } from "@/shared/constants/urls";
import axios from "axios";

const memoStore = useMemoStore();

/**
 * 指定されたIDのメモを削除する
 * @param id
 * @returns 削除が成功したかどうか
 */
export async function deleteMemo(id: number): Promise<{ success: boolean; error?: unknown }> {
  try {
    await axios.delete(`${MEMO_API}/${id}`);
    memoStore.deleteMemoById(id);
    return { success: true };
  } catch (error) {
    console.error("メモを削除できませんでした", error);
    return { success: false, error };
  }
}
