import React from "react";
import { GrWorkshop } from "react-icons/gr";
import PersonalBoxReveal from "./PersonalBoxReveal";
const experienciaLaboral = [

    {
        id: 0,
        title: "Agrovisión Perú",
        fechaInicio: "Agosto 2021",
        descripcion:
            "Supervisé y aseguré la calidad de las labores agrícolas en campo, enviando reportes detallados en Excel para optimizar las operaciones y mejorar la productividad.",
    },
    
    {
        id: 1,
        title: "Municipalidad Distrital de Pacora",
        fechaInicio: "Agosto 2023",
        descripcion:
            "Mantuve y actualicé el sitio web de la Municipalidad Distrital de Pacora, mejorando su funcionamiento y aspecto visual. Di mantenimiento a la infraestructura de redes, optimizando la conexión entre dispositivos y asegurando la operatividad de los sistemas internos.",
    },
    {
        id: 2,
        title: "ChiclayoGymnastics",
        fechaInicio: "Mayo 2024",
        descripcion:
            "Creé un sitio web para Chiclayogymnastics, optimizando rendimiento, SEO y experiencia de usuario. Diseñé una API con Strapi, implementé flujos con Git y GitHub, y supervisé el proyecto desde Figma hasta su despliegue final.",
    },
    {
        id: 3,
        title: "Ari Sports",
        fechaInicio: "Agosto 2024",
        descripcion:
            "Desarrollé un e-commerce para Ari Sports, gestionando el proyecto desde el diseño en Figma hasta su despliegue en Vercel y Render. Utilicé Strapi para el backend y Next.js para el frontend, integrando herramientas como Zustand y Shadcn/ui. Implementé control de versiones con Git y GitHub, asegurando una experiencia fluida y un diseño responsivo.",
    },
    {
        id: 4,
        title: "Colegio Secundario",
        fechaInicio: "Enero 2025",
        descripcion: "Lideré el desarrollo de un sistema de reservas utilizando Laravel y MySQL, diseñando una arquitectura escalable que garantizara el crecimiento futuro del proyecto. Implementé la metodología GitFlow para un control de versiones eficiente, lo que optimizó el flujo de trabajo del equipo. Además, empleé Excel para el análisis de datos, el seguimiento del progreso y la toma de decisiones estratégicas durante el desarrollo."
    }, 
    
    {
        id: 5,
        title: "Cafetería",
        fechaInicio: "Marzo 2025",
        descripcion: "Lideré el desarrollo de un sistema de pedidos escalable utilizando Filament PHP y MySQL, optimizando la arquitectura para soportar el crecimiento y la eficiencia operativa. Implementé GitFlow para fortalecer el control de versiones y mejorar la colaboración dentro del equipo de desarrollo. Además, utilicé Excel y Power BI para analizar datos y generar reportes clave que respaldaron decisiones estratégicas sobre el rendimiento del sistema."
    },
    {
        id: 6,
        title: "Digital Consulting",
        fechaInicio: "Abril 2025",
        descripcion: "Colaboré en el desarrollo de diferentes sistemas web desarrolladas en PHP, React y Node.js. Implementé prácticas de SEO para mejorar la visibilidad del sitio en motores de búsqueda. Además, utilicé Git y GitHub para el control de versiones, facilitando la colaboración efectiva dentro del equipo de desarrollo."
    },
    {
        id: 7,
        title: "Agrovisión Perú",
        fechaInicio: "Setiembre 2025",
        descripcion: "Desarrollé la labor de digitador, gestionando y organizando datos agrícolas con precisión y eficiencia. A esto le sumo la creación de informes detallados en Excel para optimizar las operaciones agrícolas y mejorar la toma de decisiones."
    },

];

function ExperienciaLaboral() {
    return (
        <section className="mt-24 max-w-screen-xl mx-auto w-[90%]  p-2 backdrop-blur-sm rounded-md" >
            
            <PersonalBoxReveal>
            <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3 ">
                <GrWorkshop />
                <h3>Experiencia Laboral</h3>
            </div>
            </PersonalBoxReveal>
            
            <div className="my-4 p-3">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    
                    {experienciaLaboral.map((link) => (
                        <li className="mb-10 ms-4" key={link.id}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2 items-center">
                            <PersonalBoxReveal>
                                <div className="flex flex-col">
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-100 ">
                                        {link.fechaInicio}
                                    </time>
                                    <h3 className="text-2xl font-bold text-blue-200">
                                        {link.title}
                                    </h3>
                                </div>
                            </PersonalBoxReveal>
                            <PersonalBoxReveal>
                                <div >
                                    <p className="mb-4 text-base font-semibold">
                                        {link.descripcion}
                                    </p>
                                </div>
                            </PersonalBoxReveal>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <div id="proyectos"></div>
            
        </section>
    );
}

export default ExperienciaLaboral;
