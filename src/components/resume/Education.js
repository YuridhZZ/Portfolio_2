import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Feb - Sep 2023"
          title="IT Support Intern | Quality Assurance"
          subTitle="Bank Central Asia"
          des="Assisting in the development of Internal Automation Generator Programs for Quality Assurance Team using Python. 
          Utilizing Web Scraping. Processing data from APIs provided by other Developers and transforming the data into Dashboard Analytics with Python(Streamlit)."
        />
        <ResumeCard
          badge="Oct - Jan 2023"
          title="Video Animator and Editor Intern"
          subTitle="PPN/Bappenas"
          des="Creating an animated video about Smart Transportation Mobility for IKN(Ibu Kota Negara baru, Nusantara), which will be displayed or used during a 
          Focus Group Discussion event to facilitate the explanation or depiction of the topic 'Smart Transport Mobility.'"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2017-2020"
          title="SMAN 3 Cikarang Utara"
          subTitle="Indonesia"
          des=" Natural Sciences Major "
        />
        <ResumeCard
          badge="2020 - 2024"
          title="President University"
          subTitle="Indonesia"
          des="Information Technology Major, Bachelor Degree (S1). Based in, Jababeka Industrial Park, Cikarang"
        />
      </div>
    </div>
  );
};

export default Education;
