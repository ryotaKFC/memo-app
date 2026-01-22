import { computed, ref } from "vue";
import { useFormValue } from "@/shared/composables/useFormValue";
import { CreationMemo, MemoContent } from "@/entities/memo/schemas";
import { createMemo } from "@/features/create-memo/api/createMemo";

export function useCreateMemoForm() {
  const content = useFormValue("", MemoContent);
  const isSubmitted = ref(false);
  const disabledSubmit = computed(() => isSubmitted.value || !!content.error || !content.value);

  // メモ送信時の処理
  async function submit() {
    const newMemo: CreationMemo = {
      content: content.value,
    };
    if (disabledSubmit.value) return;

    isSubmitted.value = true;
    await createMemo(newMemo);
    resetForm();
  }

  function resetForm() {
    content.reset();
    isSubmitted.value = false;
  }

  return { content, submit, disabledSubmit };
}
