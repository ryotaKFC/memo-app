import { useMemoStore } from "@/entities/memo/stores";
import { BASEURL } from "@/shared/constans/urls";
import axios from "axios";

const memoStore = useMemoStore();

/**
 * 指定されたIDのメモを削除する
 * @param id
 * @returns 削除が成功したかどうか
 */
export async function deleteMemoById(id: number): Promise<boolean> {
  try {
    await axios.delete(`${BASEURL}/${id}`);
    memoStore.deleteMemoById(id);
    return true;
  } catch (error) {
    console.error("メモを削除できませんでした", error);
    throw error;
  }
}
