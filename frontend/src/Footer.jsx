import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { Unlink2 } from 'lucide';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t-[1px] border-white/10 px-12 py-13">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-8 pt-1 bg-white rounded text-center font-bold">F</div>
              <div className="font-bold text-white text-base md:text-lg hover:text-[#fe4e02] transition duration 300">FOA</div>
            </div>
            <div>
              <p class="text-secondary text-sm md:text-base">Building digital solutions that work beautifully, one component at a time.</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold hover:text-[#fe4e02] transition duration 300">Navigate</h4>
            <ul className="text-secondary mt-3 text-sm">
              <li className="mb-2"><a href="#about">About</a></li>
              <li className="mb-2"><a href="#services">Services</a></li>
              <li className="mb-2"><a href="#projects">Projects</a></li>
              <li className="mb-2"><a href="#contact">Contact Me</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold hidden lg:block hover:text-[#fe4e02] transition duration 300">Connect</h4>
            <div className="flex lg:flex-col gap-4 mt-3 text-xl">
              <a href="https://github.com/FOA-developer" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3">
                  <div>
                    <FaGithub className="text-white hover:text-blue-500" />
                  </div>
                  <div className="text-sm text-muted hidden lg:block">
                    foa-developer
                  </div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/flourish-agbanoma-826818314" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3">
                  <div>
                  <FaLinkedin className="text-white hover:text-blue-500" />
                  </div>
                  <div className="text-sm text-muted hidden lg:block">
                    Flourish Agbanoma
                  </div>
                </div>
                </a>
              <a href="https://x.com/sheisa_dev" target="_blank" rel="noopener noreferrer">
               <div className="flex items-center gap-3">
                <div>
                  <BsTwitterX className="text-white hover:text-blue-500" />
                </div>
                <div className="text-sm text-muted hidden lg:block">
                  sheisa_dev
                </div>
               </div>
              </a>
              <a href="mailto:flourishagbanoma@gmail.com.com">
                <div className="flex items-center gap-3">
                  <div>
                   <MdEmail className="text-white hover:text-[#FF4D00]" />
                  </div>
                  <div className="text-sm text-muted hidden lg:block">
                    flourishagbanoma@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer; ;