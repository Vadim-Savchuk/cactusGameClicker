import './Kettle.css'

import watering from '../../img/watering-can.png';
import drop     from '../../img/drop.png';

function Kettle({ activeWatering, activeDrop }) {
    return (
        <div className='kettle'>
            <div className={activeWatering ? 'watering-offer active' : 'watering-offer'}>
                <img src={watering} alt='Поливалка' />
            </div>
            <div className={activeDrop ? 'drop-offer active' : 'drop-offer'}>
                <img src={drop} alt='Капелька' />
            </div>
        </div>
    );
}

export default Kettle;
