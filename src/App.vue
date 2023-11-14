<script setup>
import chatList from "./components/chatList.vue";
import sendBox from "./components/sendBox.vue";
import _axios from "../src/assets/axiosSetting.js";
</script>

<template>
    <div class="flex h-screen items-center justify-center content-center">
        <div
            class="rounded-md w-screen h-screen bg-[#0a0a0a] sm:w-auto sm:h-4/6 sm:border-2 sm:bg-white"
        >
            <chatList class="overflow-auto p-2" style="height: 88%"></chatList>
            <sendBox class="p-1 sm:m-2 sm:mt-2" style="height: 8%"></sendBox>
        </div>
    </div>
</template>
