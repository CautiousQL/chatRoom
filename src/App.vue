<script setup>
import chatList from "./components/chatList.vue";
import sendBox from "./components/sendBox.vue";
import _axios from "../src/assets/axiosSetting.js";
</script>

<template>
    <div class="flex h-screen items-center justify-center content-center">
        <div
            class="rounded-md sm:border-2 w-screen h-screen sm:w-auto sm:h-4/6 bg-[#0a0a0a] sm:bg-white"
        >
            <chatList class="overflow-auto p-2" style="height: 88%"></chatList>
            <sendBox class="p-1 sm:m-2 sm:mt-6" style="height: 8%"></sendBox>
        </div>
    </div>
</template>
