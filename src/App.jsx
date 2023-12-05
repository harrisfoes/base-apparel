import "./index.css";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import MobileImage from "./components/MobileImage";

const App = () => {
  return (
    <>
      <div>
        <Logo />
        <MobileImage />
        <Hero />
      </div>
    </>
  );
};

export default App;
