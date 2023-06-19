import Account     from '../acount/Account';
import Button      from '../button/Button';
import Message     from '../message/Message';
import Timer       from '../timer/Timer';
import Regulations from '../regulations/Regulations';

import './Game.css'

function Game(props) {
    const { account, isClicked, toWaterHandler, activeWatering } = props;

    return (
        <div className='game'>
            <Regulations />
            <Account account={account} />
            <Timer isClicked={isClicked} />
            <Button toWaterHandler={toWaterHandler} activeWatering={activeWatering} />
            <Message account={account} />
        </div>
    );
}

export default Game;
