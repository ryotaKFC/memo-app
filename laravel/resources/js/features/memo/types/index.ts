import * as v from "valibot";
import {CreationMemoSchema, MemoSchema} from "@/features/memo/schemas";

export type CreationMemo = v.InferOutput<typeof CreationMemoSchema>;
export type Memo = v.InferOutput<typeof MemoSchema>;
