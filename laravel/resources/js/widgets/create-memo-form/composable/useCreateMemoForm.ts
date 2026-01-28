import { useFormValue } from "@/composables/useFormValue";
import { MemoContent, CreationMemo } from "@/entities/memo/schemas";
import { computed, ref } from "vue";
import { createMemo } from "@/features/create-memo/apis/createMemo";

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
