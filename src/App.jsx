import Header from "./Components/Header";
import HeroSectionText from "./Components/caller/HeroSectionText";

import Footer from './Components/Footer/Footer';
import Separator from './Components/Separator/Separator';
import NatureDivider from "./Components/NatureDivisor/NatureDivisor";

const DynamicSelect = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <HeroSectionText />

      <Separator />

      <NatureDivider />

      <Footer />
    </>
  );
};

export default DynamicSelect;