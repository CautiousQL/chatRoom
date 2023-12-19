<script setup>
import chatItem from "../assets/sendItem.js";
import { ref, nextTick } from "vue";

const messageRef = ref(null);
const keepfocus = () => {
    nextTick(() => {
        const messageElement = messageRef.value;
        messageElement.focus();
    });
};

defineProps({
    chatItem: chatItem.message,
    placeholder: "",
});

defineExpose({
    keepfocus,
});
</script>

<template>
    <input
        ref="messageRef"
        type="text"
        class="rounded-md border-2 pl-2"
        v-model="chatItem.message"
        :placeholder="placeholder"
    />
</template>
