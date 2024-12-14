/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import BoxReveal from "@/components/ui/box-reveal";

const socialLinks = [
    {
        id: 1,
        title: "Linkedin",
        label: "linkedin",
        url: "https://www.linkedin.com/in/chaponanwill",
        icon: <FaLinkedin />,
    },
    {
        id: 2,
        title: "Github",
        label: "github",
        url: "https://github.com/chaponanwill",
        icon: <FaGithub />,
    },
    {
        id: 3,
        title: "X",
        label: "twitter",
        url: "https://x.com/chaponanwill",
        icon: <RiTwitterXFill />,
    },
    {
        id: 4,
        title: "Instagram",
        label: "twitter",
        url: "https://instagram.com/chaponanwill",
        icon: <FaInstagram />,
    },
];

const PersonalBoxReveal = ({
    children,
}: Readonly<{ children: ReactElement }>) => {
    return (
        <BoxReveal boxColor={"#fff"} duration={0.5}>
            {children}
        </BoxReveal>
    );
};

const Presentacion = () => {
    return (
        <section className="max-w-screen-xl mx-auto w-[90%] mt-24 ">
            <PersonalBoxReveal>
                <div className="flex flex-row  items-center gap-8  ">
                    <img
                        src="/chaponanwill/chaponanwill.webp"
                        width={70}
                        height={120}
                        className="w-20 h-20 rounded-full z-10 object-cover"
                        alt="chaponanwill"
                        title="chaponanwill | William Chapoñan"
                    />

                    <h1 className="text-xl font-bold text-center mt-10 mb-10 px-10 bg-black p-1 rounded-full">
                        Chaponanwill
                    </h1>
                </div>
            </PersonalBoxReveal>
            {/* absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg */}
            <div className=" mt-7 backdrop-blur-sm p-2">
                <PersonalBoxReveal>
                    <h2 className="font-bold text-2xl md:text-4xl ">
                        Hey, Soy{" "}
                        <span className="text-blue-500">William Chapoñan</span>
                    </h2>
                </PersonalBoxReveal>
                <PersonalBoxReveal>
                    <p className=" sm:w-[80%] lg:w-[70%] text-lg font-medium my-2 leading-8">
                        Desarrollador de software apasionado por crear
                        soluciones digitales eficientes y elegantes. Siempre
                        busco construir aplicaciones funcionales, escalables y
                        de impacto.
                    </p>
                </PersonalBoxReveal>
                <PersonalBoxReveal>
                    <div className="flex flex-row gap-4 mt-10 text-3xl">
                        {socialLinks.map((link) => (
                            <a
                                className="relative block px-2 py-2 transition hover:text-blue-500 hover:font-bold"
                                key={link.id}
                                href={link.url}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </PersonalBoxReveal>
            </div>
        </section>
    );
}



export default Presentacion;
