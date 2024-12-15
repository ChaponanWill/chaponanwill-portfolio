/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import PersonalBoxReveal from "./PersonalBoxReveal";
const excel = [
    {
        id: 1,
        title: "CRUD de Excel",
        description:
            "Realizar operaciones de creación, lectura, actualización y eliminación de datos en Excel utilizando macros y scripts. Esto permite automatizar tareas comunes en Excel y mejorar la productividad.",
        image: "/excel/BD_Excel.webp",
    },
    {
        id: 2,
        title: "Agendar Citas",
        description:
            "Utilizar Excel para crear un agenda de citas para una empresa. Esto permite organizar y gestionar las citas de manera eficiente y automatizar tareas comunes.",
        image: "/excel/CRM_Agendar_Citas.webp",
    },
    {
        id: 3,
        title: "Diagrama de Gantt",
        description:
            "Utilizar Excel para crear un diagrama de Gantt para una empresa. Esto permite visualizar el progreso y la planificación de las tareas y proyectos.",
        image: "/excel/Diagrama_Gantt.webp",
    },
    {
        id: 4,
        title: "Imprimir Certificados",
        description:
            "Automatizar la impresión de certificados en Excel. Esto permite generar certificados digitales de manera automatizada y eficiente.",
        image: "/excel/certificados.webp",
    },
];

function Excel() {
    return (
        <section className="max-w-screen-xl w-[90%] mx-auto mt-24 backdrop-blur-sm p-2 rounded-md">
            <div className="p-2">
                <PersonalBoxReveal>
                    <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3">
                        <RiFileExcel2Fill />
                        <h2>Excel</h2>
                    </div>
                </PersonalBoxReveal>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 mx-auto gap-4 ">
                    {excel.map((link) => (
                        <div
                            className="w-full border border-gray-200 rounded-lg shadow "
                            key={link.id}
                        >
                            <div className="flex flex-row items-center justify-center bg-white rounded-t-lg ">
                            <PersonalBoxReveal>
                                <img
                                    className="rounded-t-lg mx-auto h-72 smd:h-52  w-full "
                                    src={link.image}
                                    alt={link.title}
                                    title={link.title}
                                />
                            </PersonalBoxReveal>
                            </div>
                            <PersonalBoxReveal>
                                <div className="p-5">
                                    <p className="mb-2 text-2xl font-bold tracking-tight text-white ">
                                        {link.title}
                                    </p>

                                    <p className="mb-3 font-normal  dark:text-gray-400">
                                        {link.description}
                                    </p>
                                </div>
                            </PersonalBoxReveal>
                        </div>
                    ))}
                </div>
            </div>
            <div id="certificados"></div>
        </section>
    );
}

export default Excel;
