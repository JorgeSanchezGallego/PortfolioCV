import React, { useRef, useEffect } from 'react';


const PROJECTS = [
    {
    title: "Worder",
    description: "Gestión de pedidos para hostelería.",
    tech: ["React", "CSS ", "Vite", "Express", "Node.js"],
    link: "https://worder-student.vercel.app/",
    github: "https://github.com/JorgeSanchezGallego/ProyectoFinalMaster-FRONTEND"
    },
    {
    title: "La Cuina de San Blas",
    description: "Página web para un comercio local.",
    tech: ["HTML", "CSS "],
    link: "https://lacuinadesanblas.vercel.app/",
    github: "https://github.com/JorgeSanchezGallego/ProyectoMasterLaCuina"
    },
    {
    title: "Test colaborativos",
    description: "Página web para ayudarnos a estudiar.",
    tech: ["REACT", "CSS", "VITE", "GITHUB"],
    link: "https://damdaw-simulacros.vercel.app/",
    github: "https://github.com/JorgeSanchezGallego/DAMDAWSimulacros"
    },
    {
    title: "Reparto de propinas",
    description: "Página web para el reparto de propinas.",
    tech: ["HTML", "CSS", "JS"],
    link: "https://repartirpropinas.vercel.app/",
    github: "https://github.com/JorgeSanchezGallego/PropinasWeb"
    }
];

const Projects = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Añade la clase cuando el elemento es visible
                        entry.target.classList.add('reveal-visible');
                    }
                });
            },
            { threshold: 0.1 } // Se activa cuando el 10% del card es visible
        );

        const cards = sectionRef.current.querySelectorAll('.project-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);
    return (
    <section className="projects-section" id="projects" ref={sectionRef}>
        <h2 className="section-title">Proyectos Seleccionados</h2>
        <div className="projects-grid">
        {PROJECTS.map((project, index) => (
            <article key={index} className="project-card reveal-hidden" style={{transitionDelay: `${index * 0.15}s`}}>
            <div className="project-content">
                <span className="project-number">0{index + 1}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                {project.tech.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className="project-links">
                <a href={project.github} className="link-btn">Código</a>
                <a href={project.link} className="link-btn primary">Web</a>
                </div>
            </div>
            </article>
        ))}
        </div>
    </section>
    );
};

export default Projects;