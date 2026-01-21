import * as v from "valibot";

// メモの内容
export const MemoContent = v.pipe(
  v.string(),
  v.minLength(1, "文字は1文字以上入れてください！"),
  v.maxLength(300, "文字は300字以内にしてください！"),
);
export type MemoContent = v.InferInput<typeof MemoContent>;

// メモの型
export const Memo = v.object({
  id: v.number(),
  content: MemoContent,
  createdAt: v.date(),
});
export type Memo = v.InferOutput<typeof Memo>;

// メモ作成時の型
export const CreationMemo = v.omit(Memo, ["id", "createdAt"]);
export type CreationMemo = v.InferInput<typeof CreationMemo>;

// LaravelからのデータをMemoに変換する
export const ApiMemoToMemo = v.pipe(
  v.object({
    id: v.number(),
    content: v.string(),
    created_at: v.pipe(v.string(), v.toDate()),
  }),
  v.transform((api) => ({
    id: api.id,
    content: api.content,
    createdAt: api.created_at,
  })),
  Memo,
);
