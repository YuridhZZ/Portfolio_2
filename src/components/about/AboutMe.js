import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Yuridh</h2>
          <p className="text-base leading-6 ">
          As a recent graduate with a Bachelor's degree in Information Technology with a strong foundation in IT. I  am dedicated to continual learning and growth in the field of Information Technology. 
          With an inquisitive and analytical mindset, combined with a diligent approach to tasks, I am poised to contribute effectively to any team or project. 
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            22
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Bekasi, Indonesia
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">University:</span>
            President University
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
