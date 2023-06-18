import Account     from '../acount/Account';
import Button      from '../button/Button';
import Message     from '../message/Message';
import Timer       from '../timer/Timer';
import Regulations from '../regulations/Regulations';

import './Game.css'

function Game(props) {
    const { account, remainingTime, isClicked, toWaterHandler, activeWatering, message, messageHandler } = props;

    return (
        <div className='game'>
            <Regulations />
            <Account account={account} />
            <Timer time={remainingTime} isClicked={isClicked} />
            <Button toWaterHandler={toWaterHandler} activeWatering={activeWatering} />
            <Message account={account} message={message} messageHandler={messageHandler} />
        </div>
    );
}

export default Game;
