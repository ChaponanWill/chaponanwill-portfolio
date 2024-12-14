import React from "react";
import { GrWorkshop } from "react-icons/gr";
const experienciaLaboral = [
    {
        id: 1,
        title: "Municipalidad Distrital de Pacora",
        fechaInicio: "Agosto 2023",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.",
    },
    {
        id: 2,
        title: "ChiclayoGymnastics",
        fechaInicio: "Mayo 2024",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.",
    },
    {
        id: 3,
        title: "Ari Sports",
        fechaInicio: "Agosto 2024",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas.",
    },
];

function ExperienciaLaboral() {
    return (
        <section className="max-w-screen-xl mx-auto w-[90%] mt-24 p-2 backdrop-blur-sm rounded-md">
            <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3">
                <GrWorkshop />
                <h3>Experiencia Laboral</h3>
            </div>
            <div className="my-4">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {experienciaLaboral.map((link) => (
                        <li className="mb-10 ms-4" key={link.id}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-100 ">
                                {link.fechaInicio}
                            </time>
                            <h3 className="text-xl font-semibold ">
                                {link.title}
                            </h3>
                            <p className="mb-4 text-base font-normal ">
                                {link.descripcion}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                                Learn more{" "}
                                
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default ExperienciaLaboral;
