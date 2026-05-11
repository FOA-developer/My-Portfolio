import {useState} from 'react';
import { X, Menu } from 'lucide-react'

const Navbar = () => {

  const[links, setLink] = useState([
    {name: "About", link:"#about", id:1},
    {name: "Services", link:"#sevices", id:2},
    {name: "Projects", link:"#projects", id:3},
    {name: "Contact Me", link:"#contact", id:4}
  ])
  const[isOpen, setIsOpen] = useState(false)


  return ( 
    <nav className="flex justify-between items-center p-6 transparent">
      <div>
        <div className="w-9 h-8 pt-1 bg-white rounded text-center inline-block font-bold">F</div>
        <div className="inline-block align-top font-bold text-lg text-white pl-2">FOA</div>
      </div>
      <div>
        <ul className="hidden md:flex gap-6 hidden ">
          {links.map((link, index)=> {
            if (index !== 3){
              return <li className="text-secondary font-semibold pt-1" key={link.id}><a href={link.link}>{link.name}</a></li>
            }else{
              return <button className=" bg-white pt-2 pl-3 pr-3 pb-2 align-middle hover:text-white transition duration-300 hover:bg-[#fe4e02] text-sm font-bold rounded-2xl" key={link.id}><a href={link.link}>{link.name}</a></button>
            }
          })}
        </ul>
        <div className="md:hidden">
        {/* hamburger button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu */}
        {isOpen && (
          <div className="absolute top-14 right-0 w-[70%] bg-[#0a0a0a] border-t rounded-lg border-white/10 flex flex-col items-center gap-6 py-8 z-50">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FE4E02] transition duration-300">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FE4E02] transition duration-300">Services</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FE4E02] transition duration-300">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FE4E02] transition duration-300">Contact</a>
          </div>
        )}
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;