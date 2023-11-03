<script setup>
import chatList from "./components/chatList.vue";
import sendBox from "./components/sendBox.vue";
import _axios from "../src/assets/axiosSetting.js";
</script>

<template>
    <div class="flex h-screen items-center justify-center content-center">
        <div class="rounded-md border-2" style="height: 720px">
            <chatList class="overflow-auto p-2"></chatList>
            <sendBox class="p-2 m-2 mt-6"></sendBox>
        </div>
    </div>
</template>
