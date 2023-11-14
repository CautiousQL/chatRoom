<script setup>
import { reactive } from "vue";
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
    data.judge = !!chatItem.userName.length;
    if (chatItem.userName.length) {
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

const clearInput = () => {
    chatItem.message = "";
};

const keepfocus = () => {
    const messageElement = document.getElementById("messageInput");
    messageElement.focus();
};
// 需要更新，之前代码为 null
// const messageRef = ref(null);
// const keepfocus = async () => {
//     await nextTick(() => {
//         console.log(data.judge); //测试为true
//         const messageElement = messageRef.value;
//         console.log(messageRef.value); // 测试为null
//         messageElement.focus();
//     });
// };
</script>

<template>
    <div class="flex flex-row h-16 sm:mb-2 sm:pr-2">
        <messageInput
            v-if="data.judge"
            class="w-72 h-8 sm:w-9/12 sm:h-12 flex-atuo mr-6 mt-2 mb-2"
            placeholder="Input message"
            @keyup.enter.native="
                send();
                clearInput();
            "
        ></messageInput
        ><userInput
            v-else
            class="w-72 h-8 sm:w-9/12 sm:h-12 flex-atuo mr-6 mt-2 mb-2"
            placeholder="Input username"
            @keyup.enter.native="sendName()"
        ></userInput>

        <button
            v-if="data.judge"
            class="w-20 h-8 px-4 py-2 mt-2 sm:w-24 sm:h-12 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
            @click="
                send();
                clearInput();
                keepfocus();
            "
        >
            Send</button
        ><button
            v-else
            class="w-20 h-8 px-4 py-2 mt-2 sm:w-24 sm:h-12 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
            @click="sendName()"
        >
            Set
        </button>
    </div>
</template>
