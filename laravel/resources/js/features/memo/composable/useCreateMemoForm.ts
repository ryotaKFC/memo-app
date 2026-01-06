import { ref } from "vue";
import v from "@/entities/valibot.ts";
import { useMemoStore } from "@/features/memo/stores/memo.ts";
import { Memo } from "@/entities/memo.ts";

export function useCreateMemoForm() {
  // メモ作成時はid不明なので、omitでMemo型からid, createdAtを抜いた型を作成する
  const CreationMemo = v.omit(Memo, ["id", "createdAt"]);
  type CreationMemo = v.InferInput<typeof CreationMemo>;

  const content = ref<string>("");

  const error = ref<string | null>(null);
  const isSubmitted = ref(false);

  function validate(newMemo: CreationMemo) {
    const result = v.safeParse(CreationMemo, newMemo);

    if (result.success) {
      error.value = null;
      return true;
    } else {
      error.value = result.issues[0]?.message ?? "入力が不正です！";
      return false;
    }
  }

  //targetの型が不明なので型指定
  function setMemoContent(e: { target: HTMLTextAreaElement }) {
    const value = e.target.value;
    content.value = value;
    validate({ content: value });
  }

  async function submit() {
    const newMemo: CreationMemo = {
      content: content.value,
    };

    if (isSubmitted.value || !validate(newMemo)) return;
    isSubmitted.value = true;

    const memoStore = useMemoStore();
    await memoStore.createMemo(newMemo);

    content.value = "";
    error.value = null;
    isSubmitted.value = false;
  }

  return { content, setMemoContent, submit, error, isSubmitted };
}
