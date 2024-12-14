import CoverParticles from "./components/cover-particles";
import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import ExperienciaLaboral from "./components/ExperienciaLaboral";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Header />
        <Presentacion />
        <ExperienciaLaboral />
        <footer></footer>
      </div>

    </main>
    
  );
}