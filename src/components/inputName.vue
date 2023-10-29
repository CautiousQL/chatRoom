<script setup>
import userData from "../assets/user.js";
defineProps({
    placeholder: "",
});
</script>

<template>
    <input
        type="text"
        class="rounded-md border-2 pl-2"
        v-model="userData.userName_"
        :placeholder="placeholder"
    />
</template>
