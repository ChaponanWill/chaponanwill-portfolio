import CoverParticles from "./components/cover-particles";
import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import Proyectos from "./components/Proyectos";
import Excel from "./components/Excel";
import Certificados from "./components/Certificados";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col   bg-no-repeat bg-gradient-cover" id="home">
        <CoverParticles />
        <Header />
        <Presentacion />
        <ExperienciaLaboral />
        <Proyectos />
        <Excel />
        <Certificados />
        <Skills />
        <Footer />
      </div>
      

    </main>
    
  );
}