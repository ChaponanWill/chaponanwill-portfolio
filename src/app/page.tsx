import CoverParticles from "./components/cover-particles";
import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import Proyectos from "./components/Proyectos";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col   bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Header />
        <Presentacion />
        <ExperienciaLaboral />
        <Proyectos />
      </div>
      

    </main>
    
  );
}