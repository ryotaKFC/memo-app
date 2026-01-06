import * as v from "valibot";

const Content = v.pipe(
  v.string(),
  v.minLength(1, "文字は1文字以上入れてください！"),
  v.maxLength(300, "文字は300字以内にしてください！"),
);

export const CreationMemoSchema = v.object({
  content: Content,
});
export const MemoSchema = v.object({
  id: v.number(),
  content: Content,
  createdAt: v.date(),
});

export const ApiMemoSchema = v.object({
  id: v.number(),
  content: v.string(),
  created_at: v.toDate(),
});
