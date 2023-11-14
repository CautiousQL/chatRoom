<script setup>
import chatItem from "../assets/sendItem.js";
import { ref } from "vue";

const inputRef = ref(null);
defineProps({
    placeholder: "",
    chatItem: chatItem.message,
});
</script>

<template>
    <input
        id="messageInput"
        :ref="inputRef"
        type="text"
        class="rounded-md border-2 pl-2"
        v-model="chatItem.message"
        :placeholder="placeholder"
    />
</template>
