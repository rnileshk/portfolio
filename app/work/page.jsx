"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'TinDog Website',
    description: 'TinDog is a playful, responsive website designed to help dog owners connect with potential playmates for their furry friends. Inspired by the popular dating app concept, TinDog presents a fun way for users to swipe through profiles and find local matches. Built using HTML, CSS, and Bootstrap, it offers a clean and modern UI with an engaging layout optimized for both desktop and mobile devices.',
    stack: [{ name: "Html"}, {name: "Css"}, {name: "Bootstrap"}],
    image: '/project1.png',
    live: "https://rnileshk.github.io/TinDog/",
    github: "https://github.com/rnileshk/TinDog.git",
  },
  {
    num: '02',
    category: 'Drum',
    title: 'project 2',
    description: 'The Drum Kit project is an interactive web application that allows users to play various drum sounds by pressing keys on their keyboard or clicking on-screen buttons. Built with HTML, CSS, and JavaScript, this project showcases dynamic audio triggering through event listeners, giving users a virtual drumming experience. It is a fun, hands-on project for experimenting with DOM manipulation and event handling in JavaScript',
    stack: [{ name: "HTMl"}, {name: "Css"}, {name: "JavaScript"}],
    image: '/project2.png',
    live: "https://rnileshk.github.io/Drum-Kit-Project/",
    github: "https://github.com/rnileshk/Drum-Kit-Project.git",
  },
  {
    num: '03',
    category: 'frontend + Backend',
    title: 'Scholarship Form',
    description: 'The Scholarship Application Portal is a dynamic, user-friendly website designed to streamline the scholarship application process. Built with React.js for responsive, interactive components and Firebase for secure and efficient backend services, this portal enables applicants to easily complete and submit scholarship forms online',
    stack: [{ name: "React.js"}, {name: "Firebase"}],
    image: '/project3.png',
    live: "https://vercel.com/rnileshks-projects",
    github: "https://github.com/rnileshk/Application.git",
  },
  {
    num: '04',
    category: 'full Stack',
    title: 'Scholarship and Education Loan Portal',
    description: 'Scholarship and Education Loan Portal Built using React.js and Firebase (Firestore and Storage), this platform enables users to explore and apply for educational scholarships and loans. The application’s clean, responsive interface supports user registration, document uploads, and application tracking with seamless real-time data updates via Firestore. Firebase Storage ensures secure and efficient handling of documents, enhancing the user experience. This project demonstrates dynamic, secure data handling and intuitive design, streamlining the financial aid process for students.',
    stack: [{ name: "React.js"}, {name: "Firebase"}, {name: "Storage"}],
    image: '/project3.png',
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl-h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>;
                })}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Work;
  