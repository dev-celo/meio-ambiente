import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Droplet, Map, Info, Phone } from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md hover:bg-green-700 transition ${
      pathname === path ? "bg-green-800 text-white" : "text-green-100"
    }`;

  return (
    <aside className="bg-green-900 text-white w-64 min-h-screen p-6 hidden lg:block">
      <h2 className="text-2xl font-bold mb-6">Meio Ambiente</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/" className={linkStyle("/")}>
          <Home size={18} /> Home
        </Link>
        <Link to="/licenciamento-ambiental" className={linkStyle("/licenciamento-ambiental")}>
          <FileText size={18} /> Licenciamento
        </Link>
        <Link to="/outorgas" className={linkStyle("/outorgas")}>
          <Droplet size={18} /> Outorgas
        </Link>
        <Link to="/car-cefir" className={linkStyle("/car-cefir")}>
          <FileText size={18} /> CAR / CEFIR
        </Link>
        <Link to="/mapeamento" className={linkStyle("/mapeamento")}>
          <Map size={18} /> Mapeamento
        </Link>
        <Link to="/about" className={linkStyle("/about")}>
          <Info size={18} /> Sobre
        </Link>
        <Link to="/contact" className={linkStyle("/contact")}>
          <Phone size={18} /> Contato
        </Link>
      </nav>
    </aside>
  );
}
