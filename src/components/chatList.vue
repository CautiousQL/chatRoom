<script setup>
import chatBox from "./chatBox.vue";
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
    <div class="border-2 p-2 w-full" v-for="chat in chatRoom" :key="chat.id">
        <chatBox>
            <div>
                {{ chat.userName }}
            </div>
            <div>
                {{ chat.time }}
            </div>
            <div>
                {{ chat.message }}
            </div>
        </chatBox>
    </div>
</template>
