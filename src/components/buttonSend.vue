<template>
    <button
        class="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-full shadow-sm hover:bg-indigo-600 focus:ring-2"
        @click="send"
    >
        Send
        <slot></slot>
    </button>
</template>

<script>
import { send } from "../assets/request.js";

export default {
    methods: {
        send: send,
    },
};
</script>
