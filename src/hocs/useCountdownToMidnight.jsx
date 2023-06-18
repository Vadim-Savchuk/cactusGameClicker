import { useState, useEffect } from 'react';

function useCountdownToMidnight() {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        const calculateTimeToMidnight = () => {
            const now = new Date();
            const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
            const timeDifference = midnight.getTime() - now.getTime();

            const hours = Math.floor(timeDifference / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60).toString().padStart(2, '0');
            const seconds = Math.floor((timeDifference / 1000) % 60).toString().padStart(2, '0');

            setRemainingTime(`${hours}:${minutes}:${seconds}`);
        };

        calculateTimeToMidnight();

        const timer = setInterval(calculateTimeToMidnight, 1000);

        return () => clearInterval(timer);
    }, []);

    return remainingTime;
}

export default useCountdownToMidnight;