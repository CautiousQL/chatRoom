import axios from "axios";
import _axios from "./axiosSetting.js";
import chatArr from "./chatArr.js";
import chatItem from "./sendItem.js";
import databaseTime from "./getTime.js";

const send = async () => {
    try {
        // Update time when click send
        chatItem.time = databaseTime();

        await axios.request(_axios("POST")).then(function (response) {
            // console.log(response.data);
        });
    } catch (error) {
        console.error(error);
    }
};

const get = async () => {
    try {
        await axios.request(_axios("GET")).then(function (response) {
            // console.log(response.data);
            chatArr(response);
        });
    } catch (error) {
        console.error(error);
    }
};

export { send, get };
