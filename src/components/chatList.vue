<script setup>
import chatBox from "./chatBox.vue";
import chatBoxMessage from "./chatBoxMessage.vue";
</script>

<script>
import "../assets/firebaseSetting.js";
import _axios from "../assets/axiosSetting.js";
import userData from "../assets/user.js";
import { get } from "../assets/request.js";

export default {
    data() {
        return {
            userData,
            chatRoom: [],
        };
    },
    mounted() {
        firebase
            .database()
            .ref("chat")
            .on("value", (snapshot) => {
                // console.log(snapshot.val());
                this.chatRoom = snapshot.val();
            });
    },
    methods: {
        get: get,
    },
};
</script>

<template>
    <div
        class="w-full h-42 border-2 p-2 flex flex-row bg-slate-100 justify-center"
        v-for="chat in chatRoom"
        :key="chat.id"
    >
        <chatBox>
            <div>
                {{ chat.userName }}
                {{ chat.time }}
            </div>

            <chatBoxMessage class="bg-white w-72 h-24">
                {{ chat.message }}
            </chatBoxMessage>
        </chatBox>
    </div>
</template>
