import { reactive } from "vue";

const showTime = reactive({
    see: false,
    index: 0,
});

const enter = () => {
    showTime.see = true;
    showTime.index = 3;
};

const leave = () => {
    showTime.see = false;
    showTime.index = null;
};

export { showTime, enter, leave };
