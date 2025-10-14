import './App.css';
import { pizzaData } from './assets/data';

type PizzaInfo = {
    name: string;
    ingredients: string;
    photoName: string;
    price: number;
    soldOut: boolean;
};

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    );
}

function Menu() {
    const numPizza = pizzaData.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizza > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all dlicious
                    </p>

                    <ul className="pizzas">
                        {pizzaData.map((pizza: PizzaInfo) => (
                            <Pizza key={pizza.name} {...pizza} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We are still working on our menu. Please come back later :)
                </p>
            )}
        </main>
    );
}

function Pizza({ name, ingredients, photoName, price, soldOut }: PizzaInfo) {
    // if (soldOut) return null;

    return (
        <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? 'SOLD OUT' : price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>
                        We're open until {closeHour}:00. Come visit us or order
                        online!
                    </p>
                    <button className="btn">Order Now</button>
                </div>
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and{' '}
                    {closeHour}:00.
                </p>
            )}
        </footer>
    );
    // return React.createElement('footer', null, "We're currently open");
}

export default App;
