import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto">
        {/* Ícone de erro */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
            <FaExclamationTriangle className="h-10 w-10 text-red-500" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            404 - Página não encontrada
          </span>
        </h1>

        {/* Mensagem */}
        <p className="text-lg text-gray-600 mb-8">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:from-amber-600 hover:to-yellow-700"
          >
            <FaHome className="mr-2" />
            Voltar para Home
          </Link>

          <Link
            to="/contato"
            className="px-6 py-3 border-2 border-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            Fale Conosco
          </Link>
        </div>

        {/* Código de erro adicional (opcional) */}
        <div className="mt-10 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-500">
            Código de erro: <span className="font-mono">404_NOT_FOUND</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;