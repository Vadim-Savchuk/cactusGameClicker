import { useEffect, useState } from 'react';

import useTime from '../hocs/useTime';

import { getAccountValueFromLocalStorage } from '../functions/getAccountValueFromLocalStorage'
import { saveAccountValueToLocalStorage }  from '../functions/saveAccountValueToLocalStorage'

import Game  from '../component/game/Game';
import Field from '../component/field/Field';

function App() {
    const [activeWatering, setActiveWatering] = useState(false);
    const [activeDrop, setActiveDrop] = useState(false);
    const [account, setAccount]       = useState(getAccountValueFromLocalStorage() || 1);
    const [isClicked, setIsClicked]   = useState(false);
    const [isPlaying, setIsPlaying]   = useState(false);

    const time = useTime();

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
            setIsPlaying(true);

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

    return (
        <div className="container">
            <Field
                account={account}
                isPlaying={isPlaying}
                activeDrop={activeDrop}
                setIsPlaying={setIsPlaying}
                activeWatering={activeWatering}
            />
            <Game
                account={account}
                isClicked={isClicked}
                toWaterHandler={toWaterHandler}
                activeWatering={activeWatering}
            />
        </div >
    );
}

export default App;