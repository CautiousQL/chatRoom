<script setup>
import userData from "../assets/user.js";
import judgeLength from "../assets/judgeLength";
import chatItem from "../assets/sendItem.js";
import { reactive } from "vue";

const data = reactive({
    chatItem: chatItem,
});

const sendName = () => {
    data.chatItem.userName = userData.userName_;
    judgeLength(data.chatItem.userName);
};

defineProps({
    placeholder: "",
});

defineExpose({
    sendName,
});
</script>

<template>
    <input
        type="text"
        class="rounded-md border-2 pl-2"
        v-model="userData.userName_"
        :placeholder="placeholder"
    />
</template>
