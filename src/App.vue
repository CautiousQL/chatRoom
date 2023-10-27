<script setup>
import chatList from "./components/chatList.vue";
import sendBox from "./components/sendBox.vue";
import getText from "./components/getText.vue";
</script>

<script>
import databaseTime from "./assets/getTime.js";
import _axios from "../src/assets/axiosSetting.js";

console.log(databaseTime());
</script>

<template>
    <div class="flex justify-center">
        <div class="space-y-2 w-5/12 p-2 max-w-lg min-w-max">
            <chatList></chatList>
            <sendBox></sendBox>
            <getText></getText>
        </div>
    </div>
</template>
