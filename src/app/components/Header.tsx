import { FaUserTie } from "react-icons/fa6";
const navItems = [
    {
        id: 1,
        title: "Experiencia",
        url: "/#experiencia",
    },
    {
        id: 2,
        title: "Proyectos",
        url: "/#proyectos",
    },
    {
        id: 3,
        title: "Certificados",
        url: "/#certificados",
    },
];
export default function Header() {
    return (
        <header className="w-full fixed top-0 z-30 flex items-center justify-center pt-5 pb-3 backdrop-blur-sm">
            <nav className=" flex px-3 text-sm font-medium rounded-full text-gray-600 bg-white shadow-lg  ">
                <a 
                href="#home"
                title="William Chapoñan"
                className="flex items-center">
                    <FaUserTie  width={24} height={24} className="w-7 h-5 hover:text-blue-500 transition-all duration-300 " />
                </a>
                {navItems.map((link) => (
                    <a
                        className="relative block px-2 py-2 transition hover:text-blue-500 hover:font-bold "
                        key={link.id}
                        href={link.url}
                    >
                        {link.title}
                    </a>
                ))}
            </nav>
        </header>
    );
}
