import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = ()=>{
    return(<>
        <footer id='footer' className="bg-[#006eff] text-white text-center -mt-[45px]">
            <h1 className="text-2xl font-semibold sm:text-4xl">Intersted ?</h1>
            <p className="font-semibold tracking-wider text-xl my-2 sm:text-2xl">Follow me</p>
            <div className="flex justify-center space-x-4 my-3 text-2xl">
                <a href="https://github.com/M-R-Subash" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaGithub/></a>
                <a href="https://www.instagram.com/hatred_world" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaInstagram/></a>
                <a href="https://www.facebook.com/share/19Ba2YiC3G/" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaFacebook/></a>
                <a href="https://www.linkedin.com/in/m-r-subash-b676a0291" className='hover:-translate-y-1 hover:text-slate-400 duration-150 ease-linear overflow-auto'><FaLinkedin/></a>
            </div>
            <p>&copy; 2025 Subash M R. All rights reserved.</p>

        </footer>
    </>)
}

export default Footer;