import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import DynamicSelect from './App';
import Contact from './Pages/ContactPage/Contact';
import AboutPage from './Pages/AboutPage/AboutPage';
import PerfilAmbiental from './Pages/EnquadramentoAmbiental/Enquadramento';
import ScrollToTop from './Components/ScrollTop/ScrollTop';

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DynamicSelect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/enquadramentos" element={<PerfilAmbiental />} />
        <Route path="*" element={<NotFound />} /> {/* Rota para 404 */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;