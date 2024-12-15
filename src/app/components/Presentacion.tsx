/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import PersonalBoxReveal from "./PersonalBoxReveal";
import { RainbowButton } from "@/components/ui/rainbow-button";

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

const Presentacion = () => {
    return (
        <section className="max-w-screen-xl mx-auto w-[90%] mt-28 ">
            <PersonalBoxReveal>
                <div className="flex flex-row  items-center gap-8 p-2 ">
                    <img
                        src="/chaponanwill/chaponanwill.webp"
                        width={70}
                        height={120}
                        className="w-20 h-20 rounded-full z-10 object-cover"
                        alt="chaponanwill"
                        title="chaponanwill | William Chapoñan"
                    />
                    <a href="https://www.linkedin.com/in/chaponanwill" target="_blank">
                    <RainbowButton>Contáctame</RainbowButton>
                    </a>
                </div>
            </PersonalBoxReveal>

            <div className=" mt-7 backdrop-blur-sm p-2 rounded-lg">
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
                    <div className="flex flex-row gap-5 mt-10 text-3xl">
                        {socialLinks.map((link) => (
                            <a
                                className="relative block  py-2 transition hover:text-blue-100 hover:font-bold"
                                key={link.id}
                                href={link.url}
                                title={link.title}
                                target="_blank"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </PersonalBoxReveal>
            </div>
            <div id="experiencia"></div>
        </section>
    );
};

export default Presentacion;
