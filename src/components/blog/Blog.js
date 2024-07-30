import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree, blogImgFour} from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="My" subTitle="Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="February, 2021"
            subTitle="Computer Technician | Predicate: Satisfactory"
            category="Computer Hardware"
          />
          <BlogCard
            image={blogImgTwo}
            title="July, 2022"
            subTitle="Intro To Data Analytics"
            category="Data Course"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="September, 2021"
            subTitle="Network Technician | Predicate: Very Satisfactory"
            category="Documentation"
          />
          <BlogCard
            image={blogImgFour}
            title="March, 2024"
            subTitle="DuoLingo English Test"
            category="English Profiency Test"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
