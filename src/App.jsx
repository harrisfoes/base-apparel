import "./index.css";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import mobileHeroImg from "./assets/images/hero-mobile.jpg";
import desktopHeroImg from "./assets/images/hero-desktop.jpg";

const App = () => {
  return (
    <>
      <div>
        <div className="mx-14 md:mx-24 lg:hidden">
          <Logo />
          <HeroImage image={mobileHeroImg} />
        </div>

        <div className="max-w-[1440px] mx-auto lg:flex lg:justify-between md:pl-8 lg:pl-12">
          <div className="logo-hero-container lg:flex-en">
            <div className="hidden lg:block lg:mx-12">
              <Logo />
            </div>
            <Hero />
          </div>
          <div className="hidden lg:flex lg:h-full">
            <HeroImage image={desktopHeroImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
