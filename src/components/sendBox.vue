<script setup>
import { reactive } from "vue";
import userInput from "./inputName.vue";
import messageInput from "./inputMess.vue";
import _axios from "../assets/axiosSetting";
import chatItem from "../assets/sendItem.js";
import userData from "../assets/user.js";
import { send } from "../assets/request";
import config from "../settings/config";
import successfullyName from "../assets/sweetalert";

var state = reactive({
    judge: false,
    chatItem: chatItem,
});

const sendName = () => {
    chatItem.userName = userData.userName_;
    console.log(chatItem.userName);
    state.judge = !!chatItem.userName.length;
    successfullyName({
        title: `欢迎你 ${chatItem.userName}`,
        timer: config.time,
    }) === !!chatItem.userName.length;
};

const clearInput = () => {
    chatItem.message = "";
};
</script>

<template>
    <div class="flex flex-row mb-2 pr-2 rounded-md border-2">
        <messageInput
            v-if="state.judge"
            class="flex-atuo w-80 h-8 mr-6 mt-2 mb-2"
            placeholder="Input message"
            @keyup.enter.native="
                send();
                clearInput();
            "
        ></messageInput
        ><userInput
            v-else
            class="flex-atuo w-80 h-8 mr-6 mt-2 mb-2"
            placeholder="Input username"
            @keyup.enter.native="sendName()"
        ></userInput>

        <button
            v-if="state.judge"
            class="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
            @click="
                send();
                clearInput();
            "
        >
            Send message</button
        ><button
            v-else
            class="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
            @click="sendName()"
        >
            Set username
        </button>
    </div>
</template>
