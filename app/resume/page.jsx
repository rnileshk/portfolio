"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNode,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description: "I’m a passionate software developer specializing in React and Next.js, with a strong background in UI/UX design. I enjoy creating efficient, user-friendly applications that merge aesthetic appeal with functional excellence. From building seamless interfaces to architecting scalable solutions, I’m dedicated to delivering high-quality digital experiences. With a keen eye for design and a knack for solving complex problems, I’m always exploring new technologies to push the boundaries of what’s possible in web development. Outside of coding, I’m constantly learning and experimenting to refine my craft and stay at the forefront of industry trends.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nilesh Kumar"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-7033239572"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "imnileshkumar06@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi"
    },
  ]
};

const experience = {
  icon: '/public/badge.png',
  title: "My experience",
  description: "With hands-on experience in React and Next.js, I specialize in building dynamic, high-performance applications that prioritize both functionality and user experience. My background in UI/UX design enables me to create visually appealing, intuitive interfaces that enhance user engagement. I work effectively within collaborative environments, following best practices in clean coding and performance optimization. From component-based architecture to server-side rendering and state management, I am committed to delivering efficient, scalable, and user-centered solutions.",
items: [
  {
    organization: "Birla Institute of Technology Mesra, Ranchi Jharkhand",
    position: "Data Structure & Algorithm Intern",
    duration: "June 2024 - July 2024",
  },
  {
    organization: "Electromotion E-vidhyut pvt.ltd",
    position: "Full Stack Web Developer",
    duration: "September 2024 - Present",
  },
  {
    organization: "Cognifyz Technology",
    position: "Android Developer",
    duration: "May 2024 - June 2024",
  },
  {
    organization: "SkillRacee",
    position: "Python Developer",
    duration: "May 2024 - June 2025",
  },
],
};

const education = {
  icon: "",
  title: "My Education",
  description: "With a solid foundation in software development and UI/UX design, my education has equipped me with a deep understanding of programming principles, user experience best practices, and modern development frameworks. My studies focused on creating well-structured, efficient code and designing user-centric digital solutions, providing the technical and creative skills needed to thrive in web development.",
  items: [
    {
      institute: "Cambridge Institute of Technology, Ranchi Jharkhand",
      position: "B.Tech (Computer Science & Engineering)",
      duration: "August 2021 - Present",
    },
    {
      institute: "LP Shahi Intermediate College, Patahi Muzaffarpur Bihar",
      position: "Intermediate",
      duration: "May 2018 - May 2020",
    },
    {
      institute: "UHS Vishunpur Basaitha, Muzaffarpur Bihar",
      position: "Matriculation",
      duration: "June 2017 - March 2018",
    },
  ],
};

const skills = {
  title:"My Skills",
  description: "I bring a diverse skill set spanning frontend development, UI/UX design, and modern web frameworks. Proficient in React and Next.js, I build scalable, interactive applications with a focus on performance and code efficiency. My UI/UX design expertise enables me to craft intuitive, user-centered interfaces that enhance engagement and usability. I’m experienced with HTML, CSS, and JavaScript, and follow best practices in responsive design and accessibility to ensure consistent, high-quality user experiences. Additionally, I have a strong understanding of Git, RESTful APIs, and state management libraries, making me well-rounded in both the technical and creative aspects of web development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }} className="min-h-[80vh] flex items-center justify-center py-6 xl:py-12"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience" className="inline-flex text-2xl items-center w-full bg-[#272729] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance ring-offset-white transition-all disabled:pointer-event-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm">Experience</TabsTrigger>
              <TabsTrigger value="education" className="inline-flex text-2xl items-center w-full bg-[#272729] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all disabled:pointer-event-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm">Education</TabsTrigger>
              <TabsTrigger value="skills" className="inline-flex text-2xl items-center w-full bg-[#272729] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all disabled:pointer-event-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm">Skills</TabsTrigger>
              <TabsTrigger value="about" class="inline-flex text-2xl items-center w-full bg-[#272729] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all disabled:pointer-event-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm">About me</TabsTrigger>
            </TabsList>

            <div className="mon-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {experience.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:ms-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] text-accent h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                            <p className="text-xl max-w[300px] min-h-[60px] text-center lg:text-center">{item.position}</p>
                            <span className="text-white text-center lg:text-center">{item.duration}</span>
                            <div className="flex items-center gap-3">
                              <span className="w-[8px] h-[6px] rounded-full bg-white"></span>
                              <h2 className="font-bold">{item.organization}</h2>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {education.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:ms-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] text-accent h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                            <p className="text-xl max-w[300px] min-h-[60px] text-center lg:text-center">{item.position}</p>
                            <span className="text-white text-center lg:text-center">{item.duration}</span>
                            <div className="flex items-center gap-3">
                              <span className="w-[8px] h-[6px] rounded-full bg-black"></span>
                              <h1 className="font-bold">{item.institute}</h1>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:ms-0">
                    {skills.description}
                  </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="bg-[#232329] text-black h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounder-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-accent">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">
                      {about.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:ms-0">
                      {about.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    );
  };
  export default Resume;
