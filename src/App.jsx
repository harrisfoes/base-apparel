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

        <div className="container m-auto lg:flex lg:justify-end md:gap-20 xl:gap-52 w-screen">
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
