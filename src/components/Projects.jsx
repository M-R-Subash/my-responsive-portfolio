import { FaLocationArrow } from "react-icons/fa";
import ECommerceThumbnail from '../assets/E-Commerce.png'
import NikeThumbnail from '../assets/NikeThumbnail.png'

const Projects = () => {
  return (
    <>
      <h1 id="projects" className="text-center text-[28px] sm:text-4xl font-bold tracking-[5px] pt-10 ">
        PROJECTS
      </h1>
      <div className="text-center">
        <h3 className=" inline-block font-semibold mt-3 border-b-2 border-slate-950 max-sm:text-[15px] mb-10">
          PERSONAL PROJECTS
        </h3>
      </div>
      <section className="px-5 sm:px-10 lg:px-20 flex flex-col md:flex-row gap-10">
        <div className="p-5 border-gray-300 shadow-2xl border rounded-lg  hover:shadow-2xl transition-all duration-300 text-justify leading-normal">
            <img src={ECommerceThumbnail} className="rounded-xl w-[500px] shadow-xl mb-5"/>
            <h1 className="font-extrabold text-2xl tracking-[2px] mb-3">E-COMMERCE WEBSITE</h1>
            <p className="mb-3">This is a simple e-commerce website built using HTML , CSS and JavaScript. It features a responsive design, product page , Blogs Page , About and a shopping cart functionality.</p>
            <p className="mb-6"><span className="font-bold">TOOLS : </span> HTML , CSS and Javascript</p>
            <div className="group inline-flex items-center bg-blue-500 text-white font-medium rounded-3xl px-4 py-2 transition-all duration-300 hover:bg-blue-600 hover:pr-6 cursor-pointer whitespace-nowrap">
                <a href="https://m-r-subash.github.io/E-Commerce-Website/" rel="noopener noreferrer" target="_blank" className="flex items-center">
                    <span>Visit site</span>
                    <FaLocationArrow className="ml-0 opacity-0 w-0 transition-all duration-300      group-hover:ml-2     group-hover:opacity-100 group-hover:w-5" />
                </a>
            </div>
        </div>
        <div className="p-5 border-gray-300 shadow-2xl border rounded-lg  hover:shadow-2xl transition-all duration-300 text-justify leading-normal">
            <img src={NikeThumbnail} className="rounded-xl w-[500px] h-[210px] object-fill shadow-xl mb-5"/>
            <h1 className="font-extrabold text-2xl tracking-[2px] mb-3">NIKE LANDING PAGE</h1>
            <p className="mb-3"> Built a Nike Landing Page with the use of React and Tailwind CSS . Added a Slider Section with the manual Changing Shoe Pictures , Product Section , Contact Section and Footer. A Fully Responsive Nike Landing Page</p>
            <p className="mb-6"><span className="font-bold">TOOLS : </span>Tailwind CSS and React</p>
            <div className="group inline-flex items-center bg-blue-500 text-white font-medium rounded-3xl px-4 py-2 transition-all duration-300 hover:bg-blue-600 hover:pr-6 cursor-pointer whitespace-nowrap">
                <a href="https://m-r-subash.github.io/nike-tailwind-react/" rel="noopener norefferer" target="_black" className="flex items-center">
                    <span>Visit site</span>
                    <FaLocationArrow className="ml-0 opacity-0 w-0 transition-all duration-300      group-hover:ml-2 group-hover:opacity-100 group-hover:w-5" />
                </a>
            </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#006eff" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,101.3C480,107,600,117,720,154.7C840,192,960,256,1080,261.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
    </>
  );
};

export default Projects;