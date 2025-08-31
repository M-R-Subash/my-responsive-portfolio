import React from 'react'

const Skills = () => {
  return (
    <>
        <h1 id='skills' className='text-center text-[28px] sm:text-4xl font-bold tracking-[5px] pt-10 '>SKILLS</h1>
        <div className='text-center'>
            <h3 className=' inline-block font-semibold mt-3 border-b-2 border-slate-950 max-sm:text-[15px] mb-10'>TECHINICAL SKILLS</h3>
        </div>
        <section className='flex justify-center items-center flex-wrap gap-5 sm:gap-10 px-5 sm:px-10 lg:px-20 ' >
            <div>
                <img src="https://cdn3.iconfinder.com/data/icons/social-media-special/256/HTML5-1024.png" alt="html" width={70}/>
                <p className='text-center my-5 py-2 bg-orange-200 font-semibold tracking-[1px] text-orange-600 rounded-2xl'>HTML</p>
            </div>
            <div>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png" alt="css" width={70} />
                <p className='text-center my-5 py-2 bg-blue-200 font-semibold tracking-[1px] text-blue-500 rounded-2xl'>CSS</p>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="css" width={70} className='pb-[28px] ml-[25px]' />
                <p className='text-center px-5 py-2 bg-blue-200 font-semibold tracking-[1px] text-blue-400 rounded-2xl'>TAILWIND</p>
            </div>
            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png" alt="react" width={70} />
                <p className='text-center my-5 py-2 bg-cyan-200 font-semibold tracking-[1px] text-cyan-500 rounded-2xl'>REACT</p>
            </div>
            <div>
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png" alt="github" width={70} />
                <p className='text-center my-5 py-2 text-white font-semibold tracking-[1px] bg-black rounded-2xl'>GITHUB</p>
            </div>
        </section>
        <div className='text-center mt-5'>
            <div className='text-center'>
                <h3 className=' inline-block font-semibold mt-3 border-b-2 border-slate-950 max-sm:text-[15px] mb-5'>SOFT SKILLS</h3>
            </div>
            <ul className='list-inside text-lg sm:text-xl font-medium space-y-2 '>
                <li>Problem Solving</li>
                <li>Active Listening</li>
                <li>Teamwork</li>
                <li>Proactive Learning</li>
            </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#006eff" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,101.3C480,107,600,117,720,154.7C840,192,960,256,1080,261.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        
    </>
  )
}

export default Skills