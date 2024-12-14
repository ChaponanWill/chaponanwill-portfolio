import React from "react";
import { GrWorkshop } from "react-icons/gr";
import PersonalBoxReveal from "./PersonalBoxReveal";
const experienciaLaboral = [
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
];

function ExperienciaLaboral() {
    return (
        <section className="max-w-screen-xl mx-auto w-[90%] mt-24 p-2 backdrop-blur-sm rounded-md">
            <PersonalBoxReveal>
            <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3">
                <GrWorkshop />
                <h3>Experiencia Laboral</h3>
            </div>
            </PersonalBoxReveal>
            <PersonalBoxReveal>
            <div className="my-4">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {experienciaLaboral.map((link) => (
                        <li className="mb-10 ms-4" key={link.id}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2 items-center">
                                <div className="flex- flex-col">
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-100 ">
                                        {link.fechaInicio}
                                    </time>
                                    <h3 className="text-2xl font-bold text-blue-200">
                                        {link.title}
                                    </h3>
                                </div>
                                <div >
                                    <p className="mb-4 text-base font-semibold">
                                        {link.descripcion}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            </PersonalBoxReveal>
        </section>
    );
}

export default ExperienciaLaboral;
