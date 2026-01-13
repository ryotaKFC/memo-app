import v from "@/entities/valibot.ts";

const Content = v.pipe(
  v.string(),
  v.minLength(1, "文字は1文字以上入れてください！"),
  v.maxLength(300, "文字は300字以内にしてください！"),
);

// メモの型
export const Memo = v.object({
  id: v.number(),
  content: Content,
  createdAt: v.date(),
});
export type Memo = v.InferOutput<typeof Memo>;

// メモ作成時用の型
export const CreationMemo = v.object({
  content: Content,
});
export type CreationMemo = v.InferInput<typeof CreationMemo>;

// LaravelからのデータをMemoに変換する
export const ApiMemoToMemo = v.pipe(
  v.object({
    id: v.number(),
    content: Content,
    created_at: v.pipe(v.string(), v.toDate()),
  }),
  v.transform((api) => ({
    id: api.id,
    content: api.content,
    createdAt: api.created_at,
  })),
  Memo,
);
