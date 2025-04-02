// Separator.jsx
import { FaLeaf } from "react-icons/fa";

const Separator = () => {
  return (
    <div className="relative my-12">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-4 text-emerald-600 text-sm font-medium">
          <FaLeaf className="inline mr-2" />
          Transformação Ambiental
        </span>
      </div>
    </div>
  );
};

export default Separator;