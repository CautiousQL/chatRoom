import config from "../settings/config.js";
import chatItem from "./sendItem.js";
// import symbol from "./symbol.js";
import userData from "./user.js";

const _axios = (method) => {
    const getUrl = `${config.firebaseUrl}/chat.json`;
    const postUrl = `${config.firebaseUrl}/chat.json`;
    // const postUrl = `${config.firebaseUrl}/chat/${symbol}.json`;

    const url = method == "GET" ? getUrl : postUrl;
    const data = method == "GET" ? userData : chatItem;

    return {
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" },
        data: data,
    };
};

export default _axios;
