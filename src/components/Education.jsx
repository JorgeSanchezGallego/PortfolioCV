import React, { useEffect, useRef } from 'react';


const Education = () => {
    const sectionRef = useRef(null);
    
    const studies = [
        {
            title: "Máster FullStack Web Development",
            institution: "Prometeo",
            date: "Actualidad",
            description: "Especialización avanzada en FullStack."
        },
        {
            title: "Desarrollo de Aplicaciones Web (DAW)",
            institution: "Prometeo",
            date: "En curso",
            description: "Bases sólidas en desarrollo de software, bases de datos y sistemas."
        }
    ];

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
        <section className="education-section" id="education" ref={sectionRef}>
            <h2 className="section-title reveal-hidden">Estudios</h2>
            <div className="education-list">
                {studies.map((study, index) => (
                    <div key={index} className="education-item reveal-hidden" style={{ transitionDelay: `${index * 0.2}s` }}>
                        <div className="education-dot"></div>
                        <div className="education-content">
                            <span className="education-date">{study.date}</span>
                            <h3 className="education-title">{study.title}</h3>
                            <h4 className="education-institution">{study.institution}</h4>
                            <p className="education-desc">{study.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;