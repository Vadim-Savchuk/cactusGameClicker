import { useEffect, useState } from 'react';

import useCountdownToMidnight from '../hocs/useCountdownToMidnight';
import useTime                from '../hocs/useTime';

import { getAccountValueFromLocalStorage } from '../functions/getAccountValueFromLocalStorage'
import { saveAccountValueToLocalStorage }  from '../functions/saveAccountValueToLocalStorage'


import Wall  from '../component/wall/Wall';
import Game  from '../component/game/Game';
import Field from '../component/field/Field';

function App() {
    const [activeWatering, setActiveWatering] = useState(false);
    const [activeDrop, setActiveDrop]         = useState(false);
    const [isClicked, setIsClicked]           = useState(false);
    const [account, setAccount]               = useState(getAccountValueFromLocalStorage() || 1);
    const [message, setMessage]               = useState('');

    const remainingTime = useCountdownToMidnight();
    const time          = useTime();

    const toWaterHandler = () => {
        if (isClicked) return

        setActiveWatering(true)

        setTimeout(() => {
            setIsClicked(true)
            setActiveDrop(true)
            setAccount((prevAccount) => {
                const newAccount = prevAccount + 1;
                saveAccountValueToLocalStorage(newAccount);
                return newAccount;
            });

            window.localStorage.setItem('date', time)
        }, 2000);

        setTimeout(() => {
            setActiveWatering(false)
            setActiveDrop(false)
        }, 5000);
    }

    useEffect(() => {
        const dateLocalStorage = window.localStorage.getItem('date')

        if (dateLocalStorage === time) setIsClicked(true)
        if (dateLocalStorage !== time) window.localStorage.removeItem('date')

        if (!getAccountValueFromLocalStorage()) {
            saveAccountValueToLocalStorage(1);
        }

    }, [time])


    const messageHandler = (text) => {
        setMessage(text)
    }

    return (
        <div className="container">
            <Field activeWatering={activeWatering} activeDrop={activeDrop} account={account} />
            <Game
                account={account}
                message={message}
                isClicked={isClicked}
                remainingTime={remainingTime}
                toWaterHandler={toWaterHandler}
                activeWatering={activeWatering}
                messageHandler={messageHandler}
            />
            <Wall />
        </div >
    );
}

export default App;
