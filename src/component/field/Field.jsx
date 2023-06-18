import Kettle from '../kettle/Kettle';
import Plant  from '../plant/Plant';

import './Field.css'

import cat from '../../img/giphy.gif'

function Field({ activeWatering, activeDrop, account }) {

    return (
        <div className='field'>
            <img className='cat' src={cat} alt="Кіт" />
            <Kettle activeDrop={activeDrop} activeWatering={activeWatering} />
            <Plant account={account} />
        </div>
    );
}

export default Field;
