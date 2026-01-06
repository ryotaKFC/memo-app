import * as v from "valibot";
import { ApiMemoSchema, CreationMemoSchema, MemoSchema } from "@/features/memo/schemas";

export type CreationMemo = v.InferOutput<typeof CreationMemoSchema>;
export type Memo = v.InferOutput<typeof MemoSchema>;
export type ApiMemo = v.InferOutput<typeof ApiMemoSchema>;
