<script setup>
import sendItem from "../assets/sendItem";
</script>

<template>
    <input
        class="rounded-md border-2 pl-2"
        type="text"
        v-model="sendItem.message"
        placeholder="hello"
    />
</template>
