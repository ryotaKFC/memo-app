import { GenericSchema } from "valibot";
import * as v from "valibot";

/**
 * 値を指定したスキーマで検証し、検証後の値とエラーメッセージを返す
 * @param value 検証したい値
 * @param schema 検証用スキーマ
 * @returns { validData: T, errors: string[], success: boolean } value: 検証後の値, errors: エラーメッセージの配列, success: エラーがない場合はtrue
 */
export function validationData<T>(
  value: T,
  schema: GenericSchema<unknown, T>,
): { validData: T; errors: string[]; success: boolean } {
  const result = v.safeParse(schema, value);

  if (result.success) {
    return { validData: result.output, errors: [], success: true };
  } else {
    const errorMessages = result.issues.map((issue) => issue.message);
    return { validData: value, errors: errorMessages, success: false };
  }
}
