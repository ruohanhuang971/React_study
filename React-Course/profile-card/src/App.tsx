import './App.css';
import Avatar from './pages/Avatar';
import Intro from './pages/Intro';
import SkillList from './pages/SkillList';

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

export default App;
