import {useState} from 'react';
import {
  LayoutTemplate,
  PlugZap,
  Code2,
  MonitorSmartphone,
  Gauge,
  Blocks
} from 'lucide-react';

const Services = () => {
  const[services, setServices] = useState([
    {
      title: "Frontend Development",
      description: "Building responsive and scalable web applications using React, Next.js, TypeScript, and Tailwind CSS. Focused on clean architecture, reusable components, and smooth user interactions.",
      icon: Code2,
      className: "row-span-1 md:row-span-2",
      id: 1
    },
    {
      title: "UI Implementation",
      description: "Turning UI designs into fully functional and interactive interfaces with attention to responsiveness, accessibility, consistency, and user experience across devices.",
      icon: LayoutTemplate,
      className: "md:col-span-1 lg:col-span-2 ",
      id: 2,
    },
    {
      title: "API Integration",
      description: "Integrating REST APIs and managing application state to create dynamic and data-driven frontend experiences with efficient data flow and seamless functionality.",
      icon: PlugZap,
      className: "",
      id: 3,
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed, responsiveness, and overall user experience by optimizing frontend performance, reducing unnecessary load times, and building smooth interfaces across all devices.",
      icon: Gauge,
      className: "col-span-1 md:col-span-2 lg:col-span-1 ",
      id: 4,
    }
  ])

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }

  return ( 
    <section id="services">
      <div className="relative w-full pb-[6rem]" style={{ backgroundColor: '#0a0a0a' }}>
        <div
          className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='%23676775' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.2,}}/>
        <div className="relative z-10 flex flex-col pt-15 px-10">
          <div>
            <div className="flex items-center gap-1 justify-start ">
              <div className="w-8 md:w-10 h-[2px] bg-[#FE4E02]"></div>
              <p className="text-[#FE4E02] font-mono text-semibold text-xs md:text-sm">SERVICES</p>
            </div>
            <h2 className="text-white pb-3 text-3xl md:text-4xl font-bold pt-5">What I Offer</h2>
          </div>
          <div className="grid grid-cols-1 [grid-template-rows:repeat(2,300px)] grid-rows-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-4 pt-10">
            {services.map((service) => {
              const Icon = service.icon;
              return <div onMouseMove={handleCardMove} className={`bg-[#1a1a1a] group relative p-6 w-full h-full bg-[#0a0a0a] rounded-2xl text-white flex flex-col justify-between gap-4 border-[1px] border-white/10 hover:border-[#FE4E02] ${service.className}`} key={service.id}>
                       <div
                          className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 70%)'}}
                        />
                       <div className="bg-[#292929] rounded-full w-[60px] h-[60px] text-center flex items-center jutify-center"><Icon className='m-auto'/></div>
                       <div>
                        <h3 className="font-semibold text-2xl pb-2">{service.title}</h3>
                        <p className="text-muted font-mono text-sm">{service.description}</p>
                       </div>
                     </div>
            })}
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Services;