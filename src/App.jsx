import Header from "./Components/Header";
import HeroSectionText from "./Components/caller/HeroSectionText";

import Footer from './Components/Footer/Footer';
import FormCompleted from "./Components/FormCompleted/FormComplet";
import NatureDivider from "./Components/NatureDivisor/NatureDivisor";
import Feature from "./Components/Feature/Feature";
import { features } from "./data/features";

const DynamicSelect = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <HeroSectionText />

      <Feature features={features} />

      <FormCompleted />

      <NatureDivider />

      <Footer />
    </>
  );
};

export default DynamicSelect;