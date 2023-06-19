import { useCallback, useEffect, useState } from 'react';

import './Message.css'

function Message({ account, }) {
    const [message, setMessage] = useState('')

    const messageHandler = useCallback((text) => {
        setMessage(text)
    }, [])

    useEffect(() => {
        if (account === 1) {
            messageHandler('Вирости кактус 👽');
        } else if (account === 2) {
            messageHandler('Все починається з малого 🐤');
        } else if (account > 2 && account < 5) {
            messageHandler('Так тримати продовжуй 👍');
        } else if (account === 5) {
            messageHandler('Ого непоганий відрізок 😍');
        } else if (account > 5 && account < 10) {
            messageHandler('Так тримати продовжуй 🔥');
        } else if (account === 10) {
            messageHandler('Це буде щось велике ❤️');
        }
    }, [account, messageHandler]);

    return (
        <div className='message'>{message}</div>
    );
}

export default Message;
