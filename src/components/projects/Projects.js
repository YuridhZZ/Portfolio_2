import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgSix,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="My" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Web-based Application Tools for Budgeting and Risk Mitigation"
            category="Website Develop to React"
            image={workImgThree}
          />
          <ProjectsCard
            title="Mobile Game"
            category="Game Dev"
            image={workImgOne}
          />
          <ProjectsCard
            title="Chat Bot"
            category="AI"
            image={workImgTwo}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="E-commerce"
            category="Website"
            image={workImgFour}
          />
          <ProjectsCard
            title="Data Case Study"
            category="Data Analyst"
            image={workImgSix}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
