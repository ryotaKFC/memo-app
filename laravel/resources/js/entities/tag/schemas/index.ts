import * as v from "valibot";

// タグの名前
export const TagName = v.pipe(
  v.string(),
  v.minLength(1, "タグ名は1文字以上入れてください！"),
  v.maxLength(15, "タグ名は15字以内にしてください！"),
);
export type TagName = v.InferInput<typeof TagName>;

// タグの型
export const Tag = v.object({
  id: v.number(),
  tagName: TagName,
  createdAt: v.date(),
});
export type Tag = v.InferOutput<typeof Tag>;

// タグ作成時の型
export const CreationTag = v.omit(Tag, ["id", "createdAt"]);
export type CreationTag = v.InferInput<typeof CreationTag>;

// LaravelからのデータをTagに変換する
export const ApiTagToTag = v.pipe(
  v.object({
    id: v.number(),
    tag_name: v.string(),
    created_at: v.pipe(v.string(), v.toDate()),
  }),
  v.transform((api) => ({
    id: api.id,
    tagName: api.tag_name,
    createdAt: api.created_at,
  })),
  Tag,
);
