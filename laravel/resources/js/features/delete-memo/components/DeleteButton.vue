<script setup lang="ts">
import TrashSvg from "@/shared/components/svgs/TrashSvg.vue";
import { deleteMemoById } from "@/features/delete-memo/apis/deleteMemoById";

const props = defineProps<{
  id: number;
}>();
</script>
<template>
  <button @click="deleteMemoById(props.id)" type="button" class="text-gray-500">
    <TrashSvg />
  </button>
</template>
