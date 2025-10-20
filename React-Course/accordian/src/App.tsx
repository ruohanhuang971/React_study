import './App.css';
import Accordion from './components/Accordion';
import { faqs } from './assets/faq';

function App() {
    return (
        <div>
            <Accordion data={faqs} />
        </div>
    );
}

export default App;
