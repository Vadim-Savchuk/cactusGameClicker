import useCountdownToMidnight from '../../hocs/useCountdownToMidnight';

import './Timer.css'

function Timer({ isClicked }) {

    const remainingTime = useCountdownToMidnight()

    return (
        <div className='timer'>
            <div className='time'>{isClicked ? remainingTime : 'Розпочати'}</div>
        </div>
    );
}

export default Timer;
