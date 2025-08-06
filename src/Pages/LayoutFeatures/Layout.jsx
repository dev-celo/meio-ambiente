import Header from '../../Components/Header';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/Sidebar';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-50">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
