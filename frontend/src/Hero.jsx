import Navbar from "./Navbar";
import { ArrowRight} from 'lucide-react';

const Hero = () => {
  return ( 
    <section>
      <div className="relative w-full h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
          maskImage: `radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)`,
         }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='%23676775' stroke-width='1.5'/%3E%3C/svg%3E")`, 
           backgroundRepeat: 'repeat',
           opacity: 0.2,}}/>
        </div>
        <Navbar/>
        <div className="relative">
          <div className="flex flex-col text-center items-center justify-center pt-16">
            <div>
              <h1 className="text-white md:text-7xl text-5xl lg:text-8xl font-semibold">Build Faster <br></br><span className="text-secondary pt-2">Design Smarter</span></h1>
              <p className="pt-6 text-center m-auto text-secondary text-lg w-[60%]">Focused on creating high-performance, accessible, and beautiful digital experiences. Specialized in Javascript, React.js, and Modern UI systems.</p>
              <button className="mt-6 bg-[#FE4E02] text-white py-2 px-4 rounded-2xl transition duration-300">View my Work<ArrowRight/></button>
            </div>
          </div>
        </div>
     </div>
    </section>
   );
}
 
export default Hero;