import databaseTime from "./getTime.js";
import userData from "./user.js";

// 传输到input
const chatItem = {
    message: userData.message,
    time: databaseTime(),
    userName: userData.userName,
    symbol: userData.symbol,
};

export default chatItem;
