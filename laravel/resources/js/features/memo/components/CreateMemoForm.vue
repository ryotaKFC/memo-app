<script setup lang="ts">
    import PlusSvg from "@/features/memo/svgs/PlusSvg.vue";
</script>

<template>
    <div class=" p-6 bg-white rounded-lg shadow-lg">
        <h2 class="font-semibold text-gray-800 flex items-center gap-2 text-lg mb-4 ">
            <PlusSvg />
            新しいメモ
        </h2>
        <form action="" class="space-y-4">
            <textarea
                placeholder="メモを入力してください...&#10;（Enterで保存、Shift+Enterで改行）"
                class="w-full px-4 py-6 text-gray-700 border border-gray rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" rows="4" />
            <button
                class="bg-orange-500 w-full rounded-md text-white py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                <PlusSvg class="text-white" />
                メモを保存
            </button>
        </form>
    </div>
</template>

<style scoped>

</style>
