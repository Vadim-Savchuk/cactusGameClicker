
function useTime() {
    const date = new Date()
    const time = `${date.getDate()}, ${date.getMonth()}`;

    return time;
}

export default useTime;
