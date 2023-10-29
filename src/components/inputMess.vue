<script setup>
import chatItem from "../assets/sendItem.js";

defineProps({
    placeholder: "",
});
</script>

<template>
    <input
        type="text"
        class="rounded-md border-2 pl-2"
        v-model="chatItem.message"
        :placeholder="placeholder"
    />
</template>
