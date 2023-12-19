<script setup>
import { ref } from "vue";
import inputName from "./inputName.vue";

const setName = ref(null);
const sendName = () => {
    const setNameElement = setName.value;
    setNameElement.sendName();
};
</script>

<template>
    <div class="flex items-center justify-center">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="p-6">
                <div class="space-y-8">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Welcome to chatRoom !
                        </h2>
                        <p class="text-zinc-500 dark:text-zinc-400">
                            Set your chat room name and choose your avatar.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <div class="gap-4">
                            <div class="space-y-2">
                                <label
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >Chat name</label
                                ><inputName
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Enter your chat name"
                                    ref="setName"
                                    @keyup.enter.native="sendName()"
                                />
                            </div>
                        </div>

                        <button
                            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-800 text-white"
                            @click="sendName()"
                        >
                            Set it
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
