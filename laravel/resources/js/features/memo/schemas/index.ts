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
  content: Content,
  createdAt: v.string(),
});
