import './Plant.css'

import cactusLevelOne   from '../../img/cactus-lvl1.png';
import cactusLevelTwo   from '../../img/cactus-lvl2.png';
import cactusLevelThree from '../../img/cactus-lvl3.png';
import cactusLevelFour  from '../../img/cactus-lvl4.png';

import table from '../../img/table.png';

function Plant({ account }) {
    let cactusImage;

    if (account < 5) {
        cactusImage = cactusLevelOne
    } else if (account > 4 && account < 10) {
        cactusImage = cactusLevelTwo
    } else if (account > 9 && account < 15) {
        cactusImage = cactusLevelThree
    } else if (account > 14) {
        cactusImage = cactusLevelFour
    }

    return (
        <div className="plant">
            <div className='cactus-offer'>
                <img src={cactusImage} alt='Кактус' />
            </div>
            <div className='table-offer'>
                <img src={table} alt='Стіл' />
            </div>
        </div>
    );
}

export default Plant;
