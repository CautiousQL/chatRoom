<script setup>
import { reactive, nextTick, ref } from "vue";
import userInput from "./inputName.vue";
import messageInput from "./inputMess.vue";
import _axios from "../assets/axiosSetting";
import chatItem from "../assets/sendItem.js";
import userData from "../assets/user.js";
import { send } from "../assets/request";
import config from "../settings/config";
import { successAlert, errorAlert } from "../assets/sweetalert";

const data = reactive({
    judge: false,
    chatItem: chatItem,
});

const sendName = () => {
    chatItem.userName = userData.userName_;
    // data.judge = !!chatItem.userName.length; //判断长度的另外写法
    if (chatItem.userName.length) {
        data.judge = true;
        successAlert({
            title: `欢迎你 ${chatItem.userName}`,
            timer: config.time,
        });
    } else {
        errorAlert({
            title: `名称长度不可以为 0`,
            timer: config.time,
        });
    }
};

const reScrollBottom = () => {
    //worked
    console.log("123");
    // scrollBottom();
};

const clearInput = () => {
    chatItem.message = "";
};

const messageRef = ref(null);
const keepfocus = () => {
    nextTick(() => {
        const messageElement = messageRef.value;
        messageElement.inputRef.focus();
    });
};
</script>

<template>
    <div class="flex flex-row h-16 sm:mb-2 sm:pr-2">
        <messageInput
            v-if="data.judge"
            :ref="messageRef"
            class="w-72 h-8 sm:w-80 sm:h-8 flex-atuo mr-6 mt-2 mb-2"
            placeholder="Input message"
            @focus="reScrollBottom()"
            @keyup.enter.native="
                send();
                clearInput();
            "
        ></messageInput
        ><userInput
            v-else
            class="w-72 h-8 sm:w-80 sm:h-8 flex-atuo mr-6 mt-2 mb-2"
            placeholder="Input username"
            @keyup.enter.native="sendName()"
        ></userInput>

        <button
            v-if="data.judge"
            class="w-20 h-8 px-4 py-2 mt-2 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
            @click="
                send();
                clearInput();
                keepfocus();
            "
        >
            Send</button
        ><button
            v-else
            class="w-20 h-8 px-4 py-2 mt-2 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
            @click="sendName()"
        >
            Set
        </button>
    </div>
</template>
