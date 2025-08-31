const Education = () => {
  return (
    <>
      <h1 id='education' className="text-center pt-10 text-2xl sm:text-4xl font-bold ">
        EDUCATION
      </h1>
      <section className="px-5 sm:px-10 lg:px-20 flex justify-center items-center py-10  tracking-wider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-[#006eff] p-5 rounded-[20px] text-white ">
            <h2 className="text-xl font-semibold">
              Karpagam Academy of Heigher Education
            </h2>
            <p>Msc Computer Science - 2025</p>
            <ul className="list-disc pl-5">
              <li>Electronic Invoice System - Final Project</li>
              <li>AI-Based Credit Card Fraud Detection (Journal)</li>
            </ul>
          </div>
          <div className="bg-[#006eff] p-5 rounded-[20px] text-white">
            <h2 className="text-xl font-semibold">
              PTA Government Arts and Science College
            </h2>
            <p>Bsc Computer Science - 2023</p>
            <ul className="list-disc pl-5">
              <li>Home Services Booking Website - Final Project</li>
              <li>Thyroid Detection Using ML - Group Project</li>
            </ul>
          </div>
          <div className="bg-[#006eff] p-5 rounded-[20px] text-white">
            <h2 className="text-xl font-semibold">
              Veveaham Boys Hr Sec School
            </h2>
            <p>12th - 2020 | 65%</p>
          </div>
          <div className="bg-[#006eff] p-5 rounded-[20px] text-white">
            <h2 className="text-xl font-semibold">
              NCP Municipal Boys Hr Sec School
            </h2>
            <p>10th - 2018 | 76%</p>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#006eff" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,101.3C480,107,600,117,720,154.7C840,192,960,256,1080,261.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
    </>
  );
};

export default Education;