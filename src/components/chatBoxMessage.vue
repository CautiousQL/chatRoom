<template>
    <div class="chatMessage">
        <slot></slot>
    </div>
</template>

<style>
.chatMessage {
    width: 300px;
    height: 80px;
    border: 1px solid #ccc;
    position: relative;
    overflow-wrap: break-word;
}

.chatMessage::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 34px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 10px solid #ccc;
}

.chatMessage::after {
    content: "";
    position: absolute;
    left: -8px;
    top: 34px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 10px solid #fff;
}
</style>
