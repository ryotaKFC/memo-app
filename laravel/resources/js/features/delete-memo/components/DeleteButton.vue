<script setup lang="ts">
import TrashSvg from "@/components/svgs/TrashSvg.vue";
import { deleteMemo } from "@/features/delete-memo";

const props = defineProps<{
  id: number;
}>();
</script>
<template>
  <button @click="deleteMemo(props.id)" type="button" class="text-gray-500">
    <TrashSvg />
  </button>
</template>
