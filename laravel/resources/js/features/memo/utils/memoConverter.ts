import { ApiMemo, Memo } from "@/features/memo/types";

export function toMemo(apiMemo: ApiMemo): Mmeo {
  return {
    id: apiMemo.id,
    content: apiMemo.content,
    createdAt: apiMemo.created_at,
  };
}

export function toApiMemo(memo: Memo): ApiMemo {
  return {
    id: memo.id,
    content: memo.content,
    created_at: memo.createdAt,
  };
}
