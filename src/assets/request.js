import chatArr from "./chatArr";
import chatItem from "./sendItem";
import databaseTime from "./getTime";
import axios from "axios";
import _axios from "./axiosSetting";

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

const send = async () => {
    try {
        // Update time when click send
        chatItem.time = databaseTime();

        await axios.request(_axios("POST")).then(function (response) {
            // console.log(response.data);
            chatItem.message = "";
        });
    } catch (error) {
        console.error(error);
    }
};

export { get, send };
