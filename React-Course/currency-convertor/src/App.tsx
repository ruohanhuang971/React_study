import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [userInput, setUserInput] = useState<number>(1);
    const [currencyType, setCurrencyType] = useState<string>('EUR');
    const [newCurrencyType, setNewCurrencyType] = useState<string>('USD');
    const [response, setResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchValue = async () => {
            setIsLoading(true);
            const res = await fetch(
                `https://api.frankfurter.app/latest?amount=${userInput}&from=${currencyType}&to=${newCurrencyType}`
                // { signal: controller.signal }
            );
            const data = await res.json();
            setResponse(data.rates[newCurrencyType]);
            setIsLoading(false);
        };

        if (currencyType === newCurrencyType)
            return setResponse(String(userInput));
        fetchValue();
    }, [userInput, currencyType, newCurrencyType]);

    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(Number(e.target.value))}
                disabled={isLoading}
            />
            <select
                value={currencyType}
                onChange={(e) => setCurrencyType(e.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select
                value={newCurrencyType}
                onChange={(e) => setNewCurrencyType(e.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{isLoading ? `LOADING...` : response}</p>
        </div>
    );
}

export default App;
