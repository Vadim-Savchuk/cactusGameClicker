import './Timer.css'

function Timer({ time, isClicked }) {
    return (
        <div className='timer'>
            <div className='time'>{isClicked ? time : 'Розпочати'}</div>
        </div>
    );
}

export default Timer;
