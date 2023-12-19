<script setup>
import { reactive, ref, watch } from "vue";
import _axios from "../assets/axiosSetting";
import chatItem from "../assets/sendItem.js";
import { send } from "../assets/request";
import messageInput from "./inputMess.vue";

const data = reactive({
    judge: false,
    chatItem: chatItem,
});

const clearInput = () => {
    data.chatItem.message = "";
};

const messageRef = ref(null);
const keepfocus = () => {
    const messageElement = messageRef.value;
    messageElement.keepfocus();
};

watch(() => {
    data.judge = !!data.chatItem.userName.length;
});
</script>

<template>
    <div class="flex flex-row h-16 sm:mb-2 sm:pr-2">
        <messageInput
            v-if="data.judge"
            ref="messageRef"
            class="w-72 h-8 sm:w-9/12 sm:h-12 flex-atuo mr-6 mt-2 mb-2"
            placeholder="Input message"
            @keyup.enter.native="
                send();
                clearInput();
            "
        >
        </messageInput>

        <button
            v-if="data.judge"
            class="w-20 h-8 px-4 py-2 mt-2 sm:w-24 sm:h-12 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
            @click="
                send();
                clearInput();
                keepfocus();
            "
        >
            Send
        </button>
    </div>
</template>
