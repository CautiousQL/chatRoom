<script setup>
import chatItem from "../assets/sendItem.js";
import { ref } from "vue";

defineProps({
    placeholder: "",
    chatItem: chatItem.message,
});
const inputRef = ref(null);
</script>

<template>
    <input
        ref="inputRef"
        type="text"
        class="rounded-md border-2 pl-2"
        v-model="chatItem.message"
        :placeholder="placeholder"
    />
</template>
