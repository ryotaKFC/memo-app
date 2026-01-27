import { GenericSchema } from "valibot";
import { computed, reactive, ref } from "vue";
import { validationData } from "@/utils/validationData";

/**
 * フォームの各値を管理するためのComposable
 * errorはerror時にはエラーメッセージ、正常時はnullを返す
 * @param initialValue 初期値
 * @param schema スキーマ
 * @returns value: Ref<T>, error: ComputedRef<string | null>, isFocused: Ref<boolean>, onFocus: () => void, onBlur: () => void, reset: () => void
 */
export function useFormValue<T>(initialValue: T, schema: GenericSchema<unknown, T>) {
  const value = ref<T>(initialValue);
  const isTouched = ref(false);
  const error = computed(() => {
    if (!isTouched.value) return null;

    const { errors } = validationData(value.value, schema);
    return errors[0] || null;
  });

  function reset() {
    value.value = initialValue;
    isTouched.value = false;
  }

  function onFocus() {
    isTouched.value = true;
  }

  return reactive({
    value,
    error,
    onFocus,
    reset,
  });
}
