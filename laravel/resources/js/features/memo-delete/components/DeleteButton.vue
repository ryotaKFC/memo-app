<script setup lang="ts">
import TrashSvg from "@/components/svgs/TrashSvg.vue";
import { useMemoStore } from "@/entities/memo";

const { deleteMemo } = useMemoStore();

const props = defineProps<{
  id: number;
}>();
</script>
<template>
  <button @click="deleteMemo(props.id)" type="button" class="text-gray-500">
    <TrashSvg />
  </button>
</template>

<style scoped></style>
