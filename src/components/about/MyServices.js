import React from "react";
import { DiAndroid } from "react-icons/di";
import { DiUnitySmall } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import { DiGoogleAnalytics } from "react-icons/di";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Started developing websites in high school and have experience using programming languages like
         PHP (native, Laravel), Python (Flask, Streamlit), and JavaScript (React, Next.js), and others. "
      />
       <ServicesCard
        icons={<DiUnitySmall />}
        title="Game Dev"
        subTitle="Ventured into game development during my 6th semester, creating a clone of Flappy Bird and a chess game using Python, and a racing car game using Unity with C#."
      />
      <ServicesCard
        icons={< DiAndroid/>}
        title="Mobile Application"
        subTitle="Started exploring Mobile Programming in third semester, where I developed a WhatsApp clone using Java"
      />
      <ServicesCard
        icons={< DiGoogleAnalytics/>}
        title="Data Analytics"
        subTitle="Explored data analytics, learning data cleaning, visualization, big data, and data processing. Utilized tools such as Google Data Studio and Tableau.a"
      />
    </div>
  );
};

export default MyServices;
