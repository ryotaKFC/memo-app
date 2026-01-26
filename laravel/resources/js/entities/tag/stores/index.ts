import { ref } from "vue";
import { defineStore } from "pinia";
import { Tag } from "../schemas";

export const useTagStore = defineStore("tag", () => {
  const tags = ref<Tag[]>([]);

  /**
   * 新しいタグをstoreに追加する
   * @param newTag 新しいタグ
   */
  function addTag(newTag: Tag) {
    tags.value.unshift(newTag);
  }

  /**
   * storeのタグを新しいタグの配列で置き換える
   * @param newTags 新しいタグの配列
   */
  function setTags(newTags: Tag[]) {
    tags.value = newTags;
  }

  return {
    tags,
    addTag,
    setTags,
  };
});
