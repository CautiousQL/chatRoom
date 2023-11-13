<script setup>
import { onMounted, reactive, ref, nextTick } from "vue";
import _axios from "../assets/axiosSetting.js";
import userData from "../assets/user.js";
import { get } from "../assets/request.js";
import chatBox from "./chatBox.vue";
import chatBoxMessage from "./chatBoxMessage.vue";
import "../assets/firebaseSetting.js";

const data = reactive({
    see: false,
    index: 0,
    userData,
    chatRoom: [],
});

const chatRoomRef = ref(null);

const scrollBottom = () => {
    nextTick(() => {
        const chatRoomElement = chatRoomRef.value;
        chatRoomElement.scrollTop = chatRoomElement.scrollHeight;
        const chatRoomHeight = chatRoomElement.clientHeight;
        console.log(chatRoomHeight);
    });
};

onMounted(() => {
    get();

    firebase
        .database()
        .ref("chat")
        .on("value", (snapshot) => {
            // console.log(snapshot.val());
            data.chatRoom = snapshot.val();
            scrollBottom();
        });
});

const enter = () => {
    data.see = true;
    data.index = 3;
};

const leave = () => {
    data.see = false;
    data.index = null;
};
</script>

<template>
    <!-- 聊天列表 -->
    <div
        ref="chatRoomRef"
        class="w-screen h-5/6 space-y-2 sm:w-64 sm:pr-16 sm:pl-16 max-w-lg min-w-max bg-slate-50"
    >
        <!-- 聊天框循环 -->
        <div
            class="w-full h-auto pl-2 mr-2 sm:w-5/6 sm:h-42 sm:m-4 sm:pb-4 flex flex-row justify-center"
            v-for="chat in data.chatRoom"
            :key="chat.id"
        >
            <chatBox>
                <div class="flex flex-row">
                    <b>
                        {{ chat.userName }}
                    </b>
                    <div v-show="data.see" class="ml-3">
                        {{ chat.time }}
                    </div>
                </div>

                <chatBoxMessage
                    class="w-42 h-auto bg-white sm:w-64 sm:h-auto text-left"
                    @mouseenter="enter()"
                    @mouseleave="leave()"
                >
                    {{ chat.message }}
                </chatBoxMessage>
            </chatBox>
        </div>
    </div>
</template>
