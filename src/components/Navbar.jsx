import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {

  const handleScroll=(id)=>{
    const element = document.getElementById(id);
    if(element){
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <header className="lg:px-20 sm:px-10 px-5 shadow-lg fixed w-full bg-white z-10 tracking-wider">
      <nav className="flex justify-between h-20 items-center max-sm:justify-center md:gap-5 gap-2">
        <h1 className="max-md:hidden font-bold">MY PORTFOLIO</h1>
        <ul className="flex gap-4 lg:gap-8 font-medium">
          <li className="cursor-pointer" onClick={()=>handleScroll("about")}>
            <a href="#"></a>ABOUT
          </li>
          <li className="cursor-pointer" onClick={()=>handleScroll("education")}>
            <a href="#"></a>EDUCATION
          </li>
          <li className="cursor-pointer" onClick={()=>handleScroll("skills")}>
            <a href="#"></a>SKILLS
          </li>
          <li className="cursor-pointer" onClick={()=>handleScroll("projects")}>
            <a href="#"></a>PROJECTS
          </li>
        </ul>
        <a href="https://api.whatsapp.com/send?phone=7708540879&text=Hi%20,%20Can%20i%20have%20a%20chat" className="border-green-500 border tracking-wider px-5 py-2  rounded-[25px] cursor-pointer flex gap-2 justify-center items-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300  shadow-xl hover:shadow-xl hover:shadow-green-300 max-sm:hidden">
          <FaWhatsapp className="text-[20px] font-extrabold" />Connect
        </a>
      </nav>
      <a href="https://api.whatsapp.com/send?phone=7708540879&text=Hi%20,%20Can%20i%20have%20a%20chat" className="border-green-500 border tracking-wider p-3  rounded-[25px] cursor-pointer flex gap-2 justify-center items-center text-green-500 bg-green-500 text-white transition-all duration-300  shadow-xl hover:shadow-xl hover:shadow-green-300 bottom-3 right-5 sm:hidden max-sm:fixed">
          <FaWhatsapp className="text-[20px] font-extrabold" />
        </a>
    </header>
  );
};

export default Navbar;