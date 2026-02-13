import React, { useRef, useEffect } from 'react';


const About = () => {
    const sectionRef = useRef(null);
    const skills = ["React", "JavaScript", "Java", "Python", "Node.js", "Express", "HTML5/CSS3", "Git/GitHub", "Vite", "SQL"];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        const targets = sectionRef.current.querySelectorAll('.reveal-hidden');
        targets.forEach((target) => observer.observe(target));

        return () => observer.disconnect();
    }, []);
    return (
    <section className="about-section" id="about" ref={sectionRef}>
        <div className="about-container">
        <div className="about-text reveal-hidden">
            <h2 className="section-title">Sobre mí</h2>
            <p>
            Estudiante de Desarrollo de Aplicaciones Web (DAW) y cursando actualmente un Máster FullStack. Me especializo en el ecosistema de JavaScript, con un fuerte interés en la arquitectura Backend y la creación de soluciones escalables. Mi objetivo es aplicar mis conocimientos técnicos para transformar problemas complejos en herramientas digitales eficientes, manteniendo siempre un ojo crítico en la experiencia de usuario y el rendimiento.
            </p>
            <p>
            Mi objetivo actual es integrarme en un equipo donde pueda aportar mis habilidades técnicas 
            mientras sigo aprendiendo de los mejores estándares de la industria.
            </p>
        </div>
        
        <div className="about-skills reveal-hidden" style={{ transitionDelay: '0.2s' }}>
            <h3 className="skills-subtitle">Tecnologías</h3>
            <div className="skills-grid">
            {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
            ))}
            </div>
        </div>
        </div>
    </section>
    );
};

export default About;