import { skillData } from '../assets/skills.ts';
import Skill from './Skill.tsx';

type skillInfo = {
    skill: string;
    level: string;
    color: string;
};

const SkillList = () => {
    return (
        <ul className="skill-list">
            {skillData.map((s: skillInfo, index) => (
                <Skill key={index} {...s} />
            ))}
        </ul>
    );
};

export default SkillList;
