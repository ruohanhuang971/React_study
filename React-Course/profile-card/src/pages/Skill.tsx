type skillInfo = {
    skill: string;
    level: string;
    color: string;
};

const Skill = ({ skill, level, color }: skillInfo) => {
    return (
        <li className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === 'beginner' && '🌘'}
                {level === 'intermediate' && '🌗'}
                {level === 'advanced' && '🌕'}
            </span>
        </li>
    );
};

export default Skill;
