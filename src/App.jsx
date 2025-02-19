import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/form/Form";
import Hero from "./Components/Hero/Hero";

const DynamicSelect = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-[1fr_2fr] h-screen w-full">
        <div className="bg-hero flex items-start h-full">
          <Hero />
        </div>

        <div className="flex items-center justify-center h-full">
          <Form />
        </div>
      </div>
    </>
  );
};

export default DynamicSelect;