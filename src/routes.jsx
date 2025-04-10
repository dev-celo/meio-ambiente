import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import DynamicSelect from './App';
import Contact from './Pages/ContactPage/Contact';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DynamicSelect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Rota para 404 */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;