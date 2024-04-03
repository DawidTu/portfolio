"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Moje aktuálne portfólio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?",
    link: "/",
    github: "https://github.com/DawidTu",
  },
  {
    image: "/work/2.png",
    category: "javascript",
    name: "Barber Shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?",
    link: "/",
    github: "https://github.com/DawidTu",
  },
  {
    image: "/work/3.png",
    category: "javascript",
    name: "Moje prvé skušobné portfólio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?",
    link: "/",
    github: "https://github.com/DawidTu",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Martin čulen portfólio webstránka",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?",
    link: "/",
    github: "https://github.com/DawidTu",
  },
];
const uniqueCategries = [
  "všetky projekty",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategries);
  const [category, setCategory] = useState("všetky projekty");

  const filteredData = projectData.filter((project) => {
    return category === "všetky projekty"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Moje Projekty
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredData.map((project, index) => {
              return (
                <div key={project.name}>
                  <TabsContent value={category}>
                    <ProjectCard project={project} />
                  </TabsContent>
                </div>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
