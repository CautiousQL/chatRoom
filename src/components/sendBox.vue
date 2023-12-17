<script setup>
import { reactive, ref, nextTick } from "vue";
import _axios from "../assets/axiosSetting";
import chatItem from "../assets/sendItem.js";
import userData from "../assets/user.js";
import { send } from "../assets/request";
import judgeLength from "../assets/judgeLength";
// import userInput from "./inputName.vue";
// import messageInput from "./inputMess.vue";

const data = reactive({
    judge: false,
    chatItem: chatItem,
});

//maxUserNameLength_CN = 7 ; maxUserNameLength_US && digital = 11
const sendName = () => {
    chatItem.userName = userData.userName_;
    judgeLength(chatItem.userName);
    data.judge = !!chatItem.userName.length;
};

const clearInput = () => {
    chatItem.message = "";
};

const messageRef = ref(null);
const keepfocus = () => {
    nextTick(() => {
        const messageElement = messageRef.value;
        console.log(messageElement);
        messageElement.focus();
    });
};
</script>

<template>
    <div class="flex flex-row h-16 sm:mb-2 sm:pr-2">
        <!-- <messageInput
            v-if="data.judge"
            ref="messageRef"
            class="w-72 h-8 sm:w-9/12 sm:h-12 flex-atuo mr-6 mt-2 mb-2"
            placeholder="Input message"
            @keyup.enter.native="
                send();
                clearInput();
            "
        >
        </messageInput> -->

        <!-- <userInput
            v-else
            class="w-72 h-8 sm:w-9/12 sm:h-12 flex-atuo mr-6 mt-2 mb-2"
            placeholder="Input username"
            @keyup.enter.native="sendName()"
        ></userInput> -->
        <input
            v-if="data.judge"
            ref="messageRef"
            type="text"
            class="w-72 h-8 sm:w-9/12 sm:h-12 flex-atuo mr-6 mt-2 mb-2 rounded-md border-2 pl-2"
            placeholder="Input message"
            v-model="chatItem.message"
            @keyup.enter.native="
                send();
                clearInput();
            "
        />

        <input
            type="text"
            v-else
            class="w-72 h-8 sm:w-9/12 sm:h-12 flex-atuo mr-6 mt-2 mb-2 rounded-md border-2 pl-2"
            placeholder="Input username"
            v-model="userData.userName_"
            @keyup.enter.native="sendName()"
        />

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
