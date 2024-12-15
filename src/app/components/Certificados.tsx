import React from "react";
import PersonalBoxReveal from "./PersonalBoxReveal";
import { PiCertificateFill } from "react-icons/pi";
import { ViewCertificados } from "./ViewCertificados";

function Certificados() {
    return (
        <section
            className="mt-24 max-w-screen-xl mx-auto w-[90%]  p-2 backdrop-blur-sm rounded-md overflow-hidden
    "
        >
            <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3 ">
                <PersonalBoxReveal>
                    <div className="flex flex-row  items-center text-3xl gap-4 font-semibold my-3">
                        <PiCertificateFill />
                        <h3>Certificados</h3>
                    </div>
                </PersonalBoxReveal>
            </div>
            <ViewCertificados />
        </section>
    );
}

export default Certificados;
