const generateRandomLetters = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomLetters = "";

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomLetters += letters.charAt(randomIndex);
    }

    return randomLetters;
};

const symbol = generateRandomLetters();

export default symbol;
