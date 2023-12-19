<script setup>
import { reactive, watch } from "vue";
import _axios from "../assets/axiosSetting";
import chatList from "../components/chatlist.vue";
import sendBox from "../components/sendBox.vue";
import userSetting from "../components/userSetting.vue";
import chatItem from "../assets/sendItem";

const data = reactive({
    judge: true,
    chatItem: chatItem,
});

watch(() => {
    data.judge = !data.chatItem.userName.length;
});
</script>

<template>
    <div class="flex h-screen items-center justify-center content-center">
        <!-- <avarter :src="src" /> -->
        <userSetting v-if="data.judge" />

        <div
            v-else
            class="rounded-md w-screen h-screen bg-[#0a0a0a] sm:w-auto sm:h-4/6 sm:border-2 sm:bg-white"
        >
            <chatList class="overflow-auto p-2" style="height: 88%" />
            <sendBox class="p-1 sm:m-2 sm:mt-2" style="height: 8%" />
        </div>
    </div>
</template>
