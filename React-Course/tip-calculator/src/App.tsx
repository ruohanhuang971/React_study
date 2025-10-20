import { useState } from 'react';
import './App.css';
import Bill from './components/Bill';
import Price from './components/Price';
import Reset from './components/Reset';
import Satisfaction from './components/Satisfaction';

function App() {
    const [price, setPrice] = useState<number>(0);
    const [satisfaction, SetSatisfaction] = useState<number>(0);
    const [friendSatisfaction, SetFriendSatisfaction] = useState<number>(0);

    return (
        <div>
            <Bill price={price} onSet={setPrice} />
            <Satisfaction satisfaction={satisfaction} onSet={SetSatisfaction}>
                How did you like the service?
            </Satisfaction>
            <Satisfaction
                satisfaction={satisfaction}
                onSet={SetFriendSatisfaction}
            >
                How did your friend like the service
            </Satisfaction>
            <Price
                price={price}
                satisfaction={satisfaction + friendSatisfaction}
            />
            <Reset
                setPrice={setPrice}
                SetSatisfaction={SetSatisfaction}
                SetFriendSatisfaction={SetFriendSatisfaction}
            />
        </div>
    );
}

export default App;
