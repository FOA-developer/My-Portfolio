import Navbar from "./Navbar";
import { ArrowRight} from 'lucide-react';
import img from "./assets/image.png";
import SplitText from "./SplitText";

const Hero = () => {

  return ( 
    <section id="about">
      <div className="relative w-full pb-15" style={{ backgroundColor: '#0a0a0a' }}>
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
          <div className="flex items-center justify-center px-10 pr-15">
            <div className="flex gap-7 justify-between flex-col-reverse md:flex-row">
              <div className="pt-6 pl-6 md:pl-1 ">
                <div className="flex items-center gap-1 justify-start">
                  <div className="w-8 md:w-10 h-[2px] bg-[#FE4E02]"></div>
                  <p className="text-[#FE4E02] font-mono text-semibold text-xs md:text-sm pb-1">AVAILABLE FOR PROJECTS</p>
                </div>
                <div className="flex flex-col">
                  <SplitText
                    text="Building Digital"
                    className="text-white md:text-7xl text-4xl font-semibold"
                    delay={50}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                  />
                  <SplitText
                    text="Solutions."
                    className="text-secondary md:text-7xl text-4xl font-semibold pt-3"
                    delay={200}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                  />
                </div>
                <p className="pt-3 text-secondary font-mono w-[90%]">I'm Flourish Agbanoma, a frontend developer building responsive and interactive web applications with React, Next.js and Tailwind CSS. I work with reusable components, API integration, state management, and modern frontend workflows.<br></br><br></br>I turn complex ideas into clean, functional interfaces and improving both performance and user experience. Most of my growth has come from hands-on development, fixing real codebases, collaborating with other developers, and pushing myself through projects and hackathons.</p>
                <button className="mt-8 md:mt-5 bg-[#FE4E02] text-white  px-6 py-3 flex items-center justify-center gap-2 font-semibold text-sm rounded-3xl transition duration-300">View my Work<ArrowRight/></button>
              </div>
              <div className="rounded-full overflow-hidden w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 mt-18 ml-6 ">
                <img src={img} alt="Flourish Agbanoma" className="w-full h-full object-cover object-top"/>
              </div>
            </div>
          </div>
        </div>
     </div>
    </section>
   );
}
 
export default Hero;