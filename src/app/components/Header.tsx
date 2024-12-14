const navItems = [
    {
        id: 1,
        title: "Experiencia",
        label: "experiencia",
        url: "/#experiencia",
    },
    {
        id: 2,
        title: "Proyectos",
        label: "proyectos",
        url: "/#proyectos",
    },
   {
    id: 3,
       title: "Contacto",
        label: "contacto",
        url: "/#contacto",
    },
]
export default function Header() {
    return (
        <header className="w-full fixed top-0 z-30 flex items-center justify-center mt-8 ">
            <nav className=" flex px-3 text-sm font-medium rounded-full text-gray-600 bg-white shadow-lg  ">
                {
                    navItems.map((link) => (
                        <a 
                            className="relative block px-2 py-2 transition hover:text-blue-500 hover:font-bold "
                            key={link.id}
                            href={link.url}
                        >
                            {link.title}
                        </a>
                    ))
                }
            </nav>
        </header>
    )
}

