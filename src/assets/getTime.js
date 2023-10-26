const databaseTime = () => {
    const time = new Date();
    const year = time.getFullYear();
    const mouth = time.getMonth();
    const date = time.getDate();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${year}-${mouth + 1}-${date} ${hour}:${minutes}:${seconds}`;
};

export default databaseTime;
