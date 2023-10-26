const chatArr = (response) => {
    const chatRoom = [];
    for (const i in response.data) {
        const item = response.data[i];
        const chatItem = {
            message: item.message,
            time: item.time,
            userName: item.userName,
            symbol: item.symbol,
        };
        chatRoom.push(chatItem);
    }
    console.log(chatRoom);
};

export default chatArr;
