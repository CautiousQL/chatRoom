<template>
    <div class="chatMessage">
        <slot></slot>
    </div>
</template>

<style>
.chatMessage {
    min-width: 250px;
    max-width: 250px;
    min-height: 40px;
    max-height: auto;
    border: 1px solid #ccc;
    position: relative;
    overflow-wrap: break-word;
    border-radius: 6px;
    padding: 4px;
}

.chatMessage::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 10px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 10px solid #ccc;
}

.chatMessage::after {
    content: "";
    position: absolute;
    left: -8px;
    top: 10px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 10px solid #fff;
}
</style>
