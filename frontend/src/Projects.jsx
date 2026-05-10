import { useState } from "react";
import pm from "./assets/pm.png";
import sh from "./assets/sh.png";
import no from "./assets/no.png";
import ra from "./assets/ra.png";



const Project = () => {

  const[projects, setProjects] = useState([
    {title: "Project Management Website", link:"https://thepmforge.vercel.app/", image: pm, description: "A responsive web application built with a focus on clean UI design, reusable components, and smooth user interaction. It demonstrates modern frontend development practices and layout structuring.", tools: ["React.js", "Tailwind CSS"]},
    {title:  "NOVA", image: no, link:"https://nova-livid-omega.vercel.app/",description: "A website for a brand created with HTML, CSS and JS, showcasing  skills, projects, and contact information in a visually appealing manner.", tools: ["HTML", "CSS", "JAVASCRIPT"]},
    {title: "E-commerce Website", link:"https://www.shop24mart.com/", image: sh, description: "An e-commerce website i worked on with a dev using React and Typescript, offering a seamless shopping experience with product listings, shopping cart, and secure checkout.", tools: ["React", "TYPESCRIPT", "TAILWIND CSS"]},
    {title:"Randoms", image: ra, link:"https://github.com/FOA-developer/javascript_projects", description: "A collection of random projects that showcase a variety of skills and technologies, demonstrating versatility and creativity in web development all in one repository.", tools: ["HTML", "CSS", "JAVASCRIPT"]},
  ]);

  return ( 
    <section id="projects">
      <div className="relative w-full pb-15" style={{ backgroundColor: '#0a0a0a' }}>
        <div
          className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='%23676775' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.2,}}/>
        <div className="relative z-10 flex flex-col pt-12 px-12 pb-8">
          <div>
            <div className="flex items-center gap-1 justify-start ">
              <div className="w-8 md:w-10 h-[2px] bg-[#FE4E02]"></div>
              <p className="text-[#FE4E02] font-mono text-semibold text-xs md:text-sm">PROJECTS</p>
            </div>
            <h2 className="pb-4 text-white text-3xl md:text-4xl font-bold pt-5">Digital Works</h2>
          </div>
          <div  className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-[#1a1a1a] flex flex-col md:flex-row  p-6 rounded-2xl shadow-lg border-[1px] border-white/10 hover:border-[#FE4E02]  hover:shadow-xl transition duration-500 `}>
                <div className="w-35 h-35 overflow-hidden rounded-md flex-shrink-0 mt-5 mr-6">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md mb-4 grayscale hover:grayscale-0 transition duration-300" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2 pt-5"><a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#FE4E02] transition duration-300">
                      {project.title}
                    </a></h3>
                    <p className="text-gray-300 mb-4 font-mono text-sm">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="font-mono bg-[#FE4E02] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Project;