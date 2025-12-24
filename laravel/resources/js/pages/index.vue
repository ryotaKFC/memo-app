<script setup lang="ts">
import Welcome from "../features/Welcome.vue";
import Header from "@/features/header/components/Header.vue"
import CreateMemoForm from "@/features/memo/components/CreateMemoForm.vue";
</script>

<template>
    <Header />
    <main class="mx-auto px-6 py-8 max-w-2xl">
        <CreateMemoForm />
    </main>
</template>
