import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Magnetic from "./Magnetic/index";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Dávid Tuma",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+421944641938",
  },
  {
    icon: <MailIcon size={20} />,
    text: "dejvid.tuma@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Narodený 4. Oct, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Skillmea, Mosh Hamidani",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Novoveská 898, Šašrín-Stráže",
  },
];
const qualificationData = [
  {
    title: "absolvované kurzy",
    data: [
      {
        classes: "Webrebel 1: HTML, CSS & JavaScript",
        start: "24.1.2023",
        finish: "24.3.2023",
        education: "Skillmea",
      },
      {
        classes: "ReactJS",
        start: "24.1.2023",
        finish: "24.5.2023",
        education: "Skillmea",
      },
      {
        classes: "Tailwind CSS",
        start: "24.5.2023",
        finish: "15.6.2023",
        education: "Skillmea",
      },
      {
        classes: "Git a GitHub základy",
        start: "15.6.2023",
        finish: "30.6.2023",
        education: "Skillmea",
      },
    ],
  },
  {
    title: "skúsenosti",
    data: [
      {
        projects: "Pracovanie na vlastnýh projektoch",
        qualification: "FrontEnd developer",
        start: "1.7.2023",
      },
      {
        projects: "Projekt pre známeho",
        qualification: "FrontEnd developer",
        start: "1.7.2023",
      },
    ],
  },
];
const skillData = [
  {
    title: "zručnosti",
    data: [
      {
        name: "HTML, CSS, Tailwind CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript",
      },
      {
        name: "ReactJS, NextJS",
      },
    ],
  },
  {
    title: "nástroje",
    data: [
      {
        imgPath: "/about/html.png",
      },
      {
        imgPath: "/about/css.png",
      },
      {
        imgPath: "/about/js.png",
      },
      {
        imgPath: "/about/react.png",
      },
      {
        imgPath: "/about/vscode.png",
      },
      {
        imgPath: "/about/git.png",
      },
      {
        imgPath: "/about/github.png",
      },
      {
        imgPath: "/about/tailwind.png",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="2xl:h-[878px]">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          O mne
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="ml-12 w-[345px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/developer.png"
              imageStyles="rounded-xl"
            />
          </div>
          <div className="flex-1 mx-auto">
            <Tabs defaultValue="personal">
              <TabsList className="inline-block text-center">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Informácie o mne
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Kvalifikácia
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Zručnosti
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      „Od nováčika k poznaniu: Môj príbeh kódovania“
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Preskúmajte moje portfólio, aby ste boli svedkami prvých
                      kapitol môjho príbehu o kódovaní.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Jazykové zručnosti</div>
                      <div className="border-b border-border"></div>
                      <div className="flex gap-x-3 justify-center xl:text-left xl:flex-col ">
                        <p>Slovensky - rodný jazyk</p>
                        <p>Anglicky - B1</p>
                        <p>Česky - C1</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Moja začínajúca cesta
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "skúsenosti").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "skúsenosti").data.map(
                            (item, index) => {
                              const { projects, qualification, start } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group mt-2"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibolf text-xl leading-none mb-2">
                                      {projects}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div>{start}</div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {
                              getData(qualificationData, "absolvované kurzy")
                                .title
                            }
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(
                            qualificationData,
                            "absolvované kurzy"
                          ).data.map((item, index) => {
                            const { classes, start, finish, education } = item;
                            return (
                              <div
                                className="flex gap-x-8 group mt-2"
                                key={index}
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibolf text-xl leading-none mb-2">
                                    {classes}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-1">
                                    {start}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-3">
                                    {finish}
                                  </div>
                                  <div>{education}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Aké technológie používam každý deň
                    </h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Zručnosti
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "zručnosti").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Nástroje
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                    </div>
                    <div className="grid grid-cols-4 md:flex xl:gap-x-8 justify-center xl:justify-start">
                      {getData(skillData, "nástroje").data.map(
                        (item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Magnetic>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                />
                              </Magnetic>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
