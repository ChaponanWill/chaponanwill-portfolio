/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import PersonalBoxReveal from "./PersonalBoxReveal";
import { FaCode } from "react-icons/fa";
const skills = [
    {
        id: 1,
        image: "/skills/html5.svg",
        title: "HTML",
    },
    {
        id: 2,
        image: "/skills/css_old.svg",
        title: "CSS",
    },
    {
        id: 3,
        image: "/skills/javascript.svg",
        title: "JavaScript",
    },
    {
        id: 4,
        image: "/skills/typescript.svg",
        title: "TypeScript",
    },
    {
        id: 5,
        image: "/skills/git.svg",
        title: "Git",
    },
    {
        id: 6,
        image: "/skills/github-light.svg",
        title: "GitHub",
    },
    {
        id: 7,
        image: "/skills/tailwindcss.svg",
        title: "TailwindCSS",
    },
    {
        id: 8,
        image: "/skills/nextjs_logo_light.svg",
        title: "NextJS",
    },
    {
        id: 9,
        image: "/skills/astro.svg",
        title: "Astro",
    },
    {
        id: 10,
        image: "/skills/vitejs.svg",
        title: "ViteJS",
    },
    {
        id: 11,
        image: "/skills/react.svg",
        title: "React",
    },
    {
        id: 12,
        image: "/skills/npm.svg",
        title: "NPM",
    },
    {
        id: 13,
        image: "/skills/nodejs.svg",
        title: "NodeJS",
    },
    {
        id: 14,
        image: "/skills/prisma.svg",
        title: "Prisma",
    },
    {
        id: 15,
        image: "/skills/shadcn-ui.svg",
        title: "Shadcn UI",
    },
    {
        id: 16,
        image: "/skills/bootstrap.svg",
        title: "Bootstrap",
    },
    {
        id: 17,
        image: "/skills/chakra-ui.svg",
        title: "Chakra UI",
    },
    {
        id: 18,
        image: "/skills/flowbite.svg",
        title: "Flowbite",
    },
    {
        id: 19,
        image: "/skills/materialui.svg",
        title: "Material UI",
    },
    {
        id: 20,
        image: "/skills/prettier-icon-light.svg",
        title: "Prettier",
    },
    {
        id: 21,
        image: "/skills/figma.svg",
        title: "Figma",
    },
    {
        id: 22,
        image: "/skills/strapi.svg",
        title: "Strapi",
    },
    {
        id: 23,
        image: "/skills/algolia.svg",
        title: "Algolia",
    },
    {
        id: 24,
        image: "/skills/jwt.svg",
        title: "JWT",
    },
    {
        id: 25,
        image: "/skills/cloudinary.svg",
        title: "Cloudinary",
    },
    {
        id: 26,
        image: "/skills/json.svg",
        title: "JSON",
    },
    {
        id: 27,
        image: "/skills/markdown-light.svg",
        title: "Markdown",
    },

    {
        id: 29,
        image: "/skills/postgresql.svg",
        title: "PostgreSQL",
    },
    {
        id: 30,
        image: "/skills/neon.svg",
        title: "Neon",
    },
    {
        id: 31,
        image: "/skills/supabase.svg",
        title: "Supabase",
    },
    {
        id: 32,
        image: "/skills/mysql.svg",
        title: "MySQL",
    },
    {
        id: 33,
        image: "/skills/sql-server.svg",
        title: "SQL Server",
    },
    {
        id: 34,
        image: "/skills/netlify.svg",
        title: "Netlify",
    },
    {
        id: 35,
        image: "/skills/vercel_wordmark.svg",
        title: "Vercel",
    },
    {
        id: 36,
        image: "/skills/docker.svg",
        title: "Docker",
    },
    {
        id: 37,
        image: "/skills/visual-studio.svg",
        title: "Visual Studio",
    },
    {
        id: 38,
        image: "/skills/vscode.svg",
        title: "VS Code",
    },
    {
        id: 39,
        image: "/skills/sublimetext.svg",
        title: "Sublime Text",
    },
    {
        id: 40,
        image: "/skills/google-idx.svg",
        title: "Google IDX",
    },
    {
        id: 41,
        image: "/skills/windows.svg",
        title: "Windows",
    },
    {
        id: 42,
        image: "/skills/bing.svg",
        title: "Bing",
    },
    {
        id: 43,
        image: "/skills/brave.svg",
        title: "Brave",
    },
    {
        id: 44,
        image: "/skills/discord.svg",
        title: "Discord",
    },

    {
        id: 45,
        image: "/skills/firefox.svg",
        title: "Firefox",
    },
    {
        id: 46,
        image: "/skills/obs.svg",
        title: "OBS",
    },
    {
        id: 47,
        image: "/skills/linux.svg",
        title: "Linux",
    },
    {
        id: 48,
        image: "/skills/notion.svg",
        title: "Notion",
    },
    {
        id: 49,
        image: "/skills/outlook.svg",
        title: "Outlook",
    },
    {
        id: 50,
        image: "/skills/gmail.svg",
        title: "Gmail",
    },
    {
        id: 51,
        image: "/skills/mercado-pago.svg",
        title: "Mercado Pago",
    },
    {
        id: 52,
        image: "/skills/shopify.svg",
        title: "Shopify",
    },
    {
        id: 53,
        image: "/skills/stripe.svg",
        title: "Stripe",
    },
    {
        id: 54,
        image: "/skills/php.svg",
        title: "PHP",
    },
    {
        id: 55,
        image: "/skills/python.svg",
        title: "Python",
    },
    {
        id: 56,
        image: "/skills/laravel.svg",
        title: "Laravel",
    },
    {
        id: 57,
        image: "/skills/tailwindcss.svg",
        title: "TailwindCSS",
    },
    {
        id: 58,
        image: "/skills/notion.svg",
        title: "Notion",
    },
    {
        id: 59,
        image: "/skills/chakra-ui.svg",
        title: "Chakra UI",
    },
];
function Skills() {
    return (
        <section className="max-w-screen-xl w-[90%] mx-auto mt-24 backdrop-blur-sm p-2 rounded-md">
            <div className="p-2">
                <PersonalBoxReveal>
                    <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3">
                        <FaCode />
                        <h2>Skills</h2>
                    </div>
                </PersonalBoxReveal>
                <div className="flex flex-row flex-wrap gap-x-5 my-4 w-full items-center ">
                    {skills.map((skill) => (
                        <div
                            className="flex flex-row items-center gap-4 my-4 p-2 rounded-full border border-zinc-950/10 bg-gray-300"
                            key={skill.id}
                        >
                            <PersonalBoxReveal>
                                <img
                                    src={skill.image}
                                    alt={skill.title}
                                    title={skill.title}
                                    className="size-5 md:size-8 hover:scale-105 transition-all duration-300 "
                                />
                            </PersonalBoxReveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
