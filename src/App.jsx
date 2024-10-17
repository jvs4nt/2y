
import HeroSection from "./components/HeroSection"

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const App = () => {

  console.log(import.meta.env.VITE_APP_ORIGIN);

    return (
    <>
      <div id="inicio" className="px-2 pt-20 mx-auto max-w-7xl">
        <HeroSection />
      </div>
    </>
  )
}

export default App