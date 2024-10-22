import Hero from "./components/hero";
import CustomMarquee from "./components/marquee";
import EnteUse from "./components/enteUse";
import CustomerReview from "./components/customerReview";
import Features from "./components/pages/features";
import Pricing from "./components/pages/pricing";
import Faq from "./components/faq";

function App() {
  return (
    <>
      <Hero />
      <CustomMarquee />
      <EnteUse />
      <CustomerReview />
      <Features />
      <Pricing />
      <Faq />
    </>
  );
}

export default App;
