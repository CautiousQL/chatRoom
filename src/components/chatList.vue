<script setup>
import { onMounted, reactive } from "vue";
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

onMounted(() => {
    get();

    firebase
        .database()
        .ref("chat")
        .on("value", (snapshot) => {
            // console.log(snapshot.val());
            data.chatRoom = snapshot.val();
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
    <div class="space-y-2 h-5/6 w-92 pr-6 pl-2 max-w-lg min-w-max bg-slate-50">
        <div
            class="w-full h-42 p-2 flex flex-row justify-center"
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
                    class="bg-white w-72 h-24 text-left"
                    @mouseenter="enter()"
                    @mouseleave="leave()"
                >
                    {{ chat.message }}
                </chatBoxMessage>
            </chatBox>
        </div>
    </div>
</template>
