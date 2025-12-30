import { ref } from "vue";
import * as v from "valibot";
import { CreationMemoSchema, type CreationMemo } from "@/features/memo/schemas";
import { useMemoStore } from "@/features/memo/stores/memo.ts";

export function useCreateMemoForm() {
  const content = ref<string>("");

  const error = ref<string | null>(null);
  const isSubmitted = ref(false);

  function validate(newMemo: CreationMemo) {
    const result = v.safeParse(CreationMemoSchema, newMemo);

    if (result.success) {
      error.value = null;
      return true;
    } else {
      error.value = result.issues[0]?.message ?? "入力が不正です！";
      return false;
    }
  }

  function setMemoContent(value: string) {
    content.value = value;

    const newMemo: CreationMemo = {
      content: value,
    };

    validate(newMemo);
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
