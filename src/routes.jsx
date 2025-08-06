import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import DynamicSelect from './App';
import Contact from './Pages/ContactPage/Contact';
import AboutPage from './Pages/AboutPage/AboutPage';
import PerfilAmbiental from './Pages/EnquadramentoAmbiental/Enquadramento';
import ScrollToTop from './Components/ScrollTop/ScrollTop';
import LicenciamentoPage from './Pages/LayoutFeatures/LicenciamentoPage';
import OutorgasPage from './Pages/LayoutFeatures/OutorgasPage';
import CarCefirPage from './Pages/LayoutFeatures/CarCefirPage';
import MapeamentoPage from './Pages/LayoutFeatures/MapeamentoPage';

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DynamicSelect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/enquadramentos" element={<PerfilAmbiental />} />
        <Route path="/licenciamento-ambiental" element={<LicenciamentoPage />} />
        <Route path="/outorgas" element={<OutorgasPage />} />
        <Route path="/car-cefir" element={<CarCefirPage />} />
        <Route path="/mapeamento" element={<MapeamentoPage />} />
        <Route path="*" element={<NotFound />} /> {/* Rota para 404 */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;