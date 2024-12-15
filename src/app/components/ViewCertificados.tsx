/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import PersonalBoxReveal from "./PersonalBoxReveal";

const reviews = [
  {
    id:1,
    name: "Municipalidad Distrital de Pacora",
    img: "/certificaciones/constancia_municipalidad.webp",
  },
  {
    id:2,
    name: "SENATI - Inglés",
    img: "/certificaciones/ingles.webp",
  },
  {
    id:3,
    name: "CISCO - Ciberseguridad",
    img: "/certificaciones/ciberseguridad.webp",
  },
  {
    id:4,
    name: "CISCO - Get Connected",
    img: "/certificaciones/get_connected.webp",
  },
  {
    id:5,
    name: "CISCO - Introducción a IoT",
    img: "/certificaciones/introduccion_iot.webp",
  },
  {
    id:6,
    name: "CISCO - Entrepreneurship",
    img: "/certificaciones/entrepreneurship.webp",
  },
  {
    id:7,
    name: "Programación Orientada a Objetos",
    img: "/certificaciones/poo.webp",
  },
  {
    id:8,
    name: "API REST",
    img: "/certificaciones/api_rest.webp",
  },
  {
    id:9,
    name: "El Software y La Programación",
    img: "/certificaciones/software_programacion.webp",
  },
  {
    id:10,
    name: "Contruye una Tienda en Shopify",
    img: "/certificaciones/shopify.webp",
  },
  {
    id:11,
    name: "Agrovisión - Certificado de Trabajo",
    img: "/certificaciones/certificado_trabajo.webp",
  }

];

const firstRow = reviews.slice(0, reviews.length / 1);


const ReviewCard = ({
  id,
  img,
  name,
  
}: {
  id: number;
  img: string;
  name: string;
  
  
}) => {
  return (
    <figure
      className={cn(
        "relative  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <PersonalBoxReveal>
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-lg h-64 md:h-80 w-auto my-auto" width="20" height="20" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold italic px-1">
            {name}
          </figcaption>
          
        </div>
      </div>
      </PersonalBoxReveal>
      
    </figure>
  );
};

export function ViewCertificados() {
  return (
    <div className="relative flex  flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      
    </div>
  );
}
