<script setup>
import chatItem from "../assets/sendItem.js";
import { ref } from "vue";

defineProps({
    ref: "messageRef",
    chatItem: chatItem.message,
    placeholder: "",
});
</script>

<template>
    <input
        ref="ref"
        type="text"
        class="rounded-md border-2 pl-2"
        v-model="chatItem.message"
        :placeholder="placeholder"
    />
</template>
