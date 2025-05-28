/* eslint-disable @next/next/no-img-element */

import { Link } from "lucide-react";
import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import PersonalBoxReveal from "./PersonalBoxReveal";

const proyectos = [
    {
        id: 1,
        title: "Ari Sports",
        description:
            "Página web de la empresa Ari Sports, diseñada para la cotización de productos deportivos.",
        image: "/projects/arisports.webp",
        url: "https://arisportsillimo.com",
    },
    {
        id: 2,
        title: "Chiclayogymnastics",
        description:
            "Página web para Chiclayogymnastics, optimizando rendimiento, SEO y experiencia de usuario.",
        image: "/projects/chiclayogymnastics.webp",
        url: "https://chiclayogymnastics.com",
    },
    {
        id: 3,
        title: "Landing Page",
        description:
            "Landing page de un banco, proyecto de práctica para medir el impacto de la experiencia de usuario.",
        image: "/projects/landing_page.webp",
        url: "https://banco-chaponawill.netlify.app",
    },
    {
        id: 4,
        title: "Paradero las Pizzas",
        description: "Página web para el restaurante Paradero Las Pizzas, optimizando rendimiento, SEO y experiencia de usuario.",
        image: "/projects/paraderolaspizzas.webp",
        url: "https://paraderolaspizzas.netlify.app"
    },
    {
        id: 5,
        title: "Sistema de Reservas",
        description: "Sistema de reservas para el colegio secundario, diseñado para gestionar reservas de aulas.",
        image: "/projects/jose-olaya.webp",
        
    },
    {
        id: 6,
        title: "Sistema de Pedidos",
        description:
            "Sistema de pedidos cafetería, optimizando la arquitectura para soportar el crecimiento y la eficiencia operativa.",
        image: "/projects/aroma-coffee.webp",
        
    },
    {
        id: 7,
        title: "Landing Page de Evento de Gimnasia",
        description:
            "Landing page para un evento de gimnasia, diseñada para captar la atención de los usuarios y proporcionar información clara.",
        image: "/projects/evento_gimnasia.webp",
        url: "https://campeonatoregional2025.netlify.app"
    }
];

function Proyectos() {
    return (
        <section className="max-w-screen-xl mx-auto w-[90%] backdrop-blur-sm p-2 rounded-md mt-24">
            <div className="p-2 ">
                <PersonalBoxReveal>
                    <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3">
                        <FaCodeBranch />
                        <h2>Proyectos</h2>
                    </div>
                </PersonalBoxReveal>
                <div className="grid md:grid-cols-2 mx-auto  gap-4">
                    {proyectos.map((link) => (
                        <div
                            key={link.id}
                            className="py-4  items-center gap-2 border p-2 rounded-lg border-zinc-950/10 shadow-lg"
                        >
                            <PersonalBoxReveal>
                                <div>
                                    <img
                                        src={link.image}
                                        alt={link.title}
                                        title={link.title}
                                        className=" h-52 sm:h-72 object-cover rounded-lg mx-auto"
                                    />
                                    <div>
                                        <p className="ml-4  font-semibold text-center text-2xl mt-2">
                                            {link.title}
                                        </p>
                                        <p className="text-lg p-2">
                                            {link.description}
                                        </p>
                                        {/* Si existe url, muestra el div */}
                                        {link.url && (
                                            <div className="flex flex-row justify-center items-center gap-4 ">
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex flex-row items-center gap-2 text-gray-200 hover:text-blue-200 transition-all duration-300 border border-zinc-950/10 rounded-lg p-2 shadow-lg"
                                                    title={link.title}
                                                >
                                                    <Link />
                                                    <p>Ver Proyecto</p>
                                                </a>
                                            </div>
                                        )}
                                        
                                    </div>
                                </div>
                            </PersonalBoxReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Proyectos;
