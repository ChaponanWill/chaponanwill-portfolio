import React from "react";
import PersonalBoxReveal from "./PersonalBoxReveal";
const footer = [
    {
        id: 1,
        title: "Inicio",
        url: "/#home",
    },
    {
        id: 2,
        title: "Experiencia",
        url: "/#experiencia",
    },
    {
        id: 3,
        title: "Proyectos",
        url: "/#proyectos",
    },
    {
        id: 4,
        title: "Certificados",
        url: "/#certificados",
    },
];

function Footer() {
    return (
        <footer className="max-w-screen-xl mx-auto w-[90%] backdrop-blur-sm p-2 rounded-md mt-24 pb-10">
            <div className="border-[1px]"></div>
            <div className="p-2">
                <div className="w-full mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
                    <PersonalBoxReveal>
                        <span className="text-lg font-semibold ">
                            © 2023 ChaponanWill
                        </span>
                    </PersonalBoxReveal>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
                        {footer.map((link) => (
                            <li key={link.id}>
                                <PersonalBoxReveal>
                                    <a
                                        href={link.url}
                                        className="hover:underline me-4 md:me-6 font-semibold  transition-all duration-300 text-sm md:text-lg "
                                    >
                                        {link.title}
                                    </a>
                                </PersonalBoxReveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
