import { useEffect, createRef } from 'react';

import Kettle from '../kettle/Kettle';
import Plant  from '../plant/Plant';
import Wall   from '../wall/Wall';

import './Field.css'

import cat       from '../../img/giphy.gif'
import dropSound from '../../audio/drop.mp3'

function Field({ activeWatering, activeDrop, account, isPlaying }) {
    const audioRef = createRef();

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [isPlaying]);

    return (
        <div className='field'>
            <img className='cat' src={cat} alt="Котик" />
            <audio ref={audioRef} src={dropSound} />
            <Kettle activeDrop={activeDrop} activeWatering={activeWatering} />
            <Plant account={account} />
            <Wall />
        </div>
    );
}

export default Field;
