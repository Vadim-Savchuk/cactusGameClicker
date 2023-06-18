import './Button.css'

function Button({ toWaterHandler, activeWatering }) {
    return (
        <button
            disabled={activeWatering}
            onClick={toWaterHandler}
        >Полити</button>
    );
}

export default Button;
