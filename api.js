const api = (msg) => {
    // delay to simulate processing
    const delay = 1000;
    return new Promise((res, rej) => {
        setTimeout(() => res(msg), delay);
    });
};

module.exports = api;
