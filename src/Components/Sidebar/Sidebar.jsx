import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Droplet, Map, Info, Phone } from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <Home size={20} /> },
    { to: "/licenciamento-ambiental", label: "Licenciamento", icon: <FileText size={20} /> },
    { to: "/outorgas", label: "Outorgas", icon: <Droplet size={20} /> },
    { to: "/car-cefir", label: "CAR / CEFIR", icon: <FileText size={20} /> },
    { to: "/mapeamento", label: "Mapeamento", icon: <Map size={20} /> },
    { to: "/about", label: "Sobre", icon: <Info size={20} /> },
    { to: "/contact", label: "Contato", icon: <Phone size={20} /> },
  ];

  return (
    <aside className="bg-green-900 text-white w-64 min-h-screen p-6 hidden lg:flex flex-col shadow-lg">
      <h2 className="text-2xl font-bold mb-8 tracking-wide text-white">Meio Ambiente</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`
                flex items-center text-amber-50! gap-3 px-4 py-3 rounded-lg transition-all duration-300
                ${isActive 
                  ? "bg-green-800 text-white! font-semibold shadow-lg border-l-4 border-green-300" 
                  : "text-white hover:bg-green-700 hover:shadow-md"}
              `}
            >
              <span className="text-white transition-all duration-300">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Rodapé com informação leve */}
      <div className="mt-auto pt-6 border-t border-green-700">
        <p className="text-sm text-green-200">
          &copy; 2025 Ambitrade. Todos os direitos reservados.
        </p>
      </div>
    </aside>
  );
}
