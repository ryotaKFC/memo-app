import { computed, ref } from "vue";
import { CreationMemo, MemoContent, useMemoStore } from "@/entities/memo";
import { useFormValue } from "@/composables/useFormValue";

const memoStore = useMemoStore();

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

    await memoStore.addMemo(newMemo);

    resetForm();
  }

  function resetForm() {
    content.reset();
    isSubmitted.value = false;
  }

  return { content, submit, disabledSubmit };
}
