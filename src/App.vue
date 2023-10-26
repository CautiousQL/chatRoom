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
    <div class="space-y-2">
        <chatList></chatList>
    </div>
    <sendBox></sendBox>
    <getText></getText>
</template>
