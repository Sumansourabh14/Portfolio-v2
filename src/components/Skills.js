import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../data';

function Skills() {
    return (
        <section id="skills" className='bg-gray-900'>
            <div className="container mx-auto px-4 py-40">
                <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">Skills</h2>
                <p className="my-8 text-center lg:text-left text-slate-300">Here are some of the skills that I have!</p>
                <ul className="grid gap-3 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
                    {skills.map((skill) => {
                        return (
                            <li key={skill.id} className="shadow-lg rounded bg-gray-800 flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-cyan-800 duration-200">
                                <strong className='text-lg lg:font-bold'>{skill.name}</strong>
                                <FontAwesomeIcon icon={skill.icon} className="text-6xl lg:text-8xl" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Skills;