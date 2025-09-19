"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "As a skilled software developer, I design and build robust, user-centric applications that solve real-world problems. My work spans from crafting intuitive interfaces to developing efficient backend logic. With expertise in various programming languages and frameworks, I’m dedicated to writing clean, maintainable code and optimizing application performance. I thrive in collaborative environments, continuously learning and adapting to new technologies to deliver innovative and scalable solutions.",
    href: "",
  },
  {
    num: "02",
    title: "React Development",
    description: "I specialize in developing dynamic and responsive web applications using React, focusing on creating seamless, user-friendly interfaces. With a deep understanding of JavaScript, component-based architecture, and state management, I build applications that are both performant and scalable. My approach emphasizes clean code, modular design, and a strong attention to detail to ensure an exceptional user experience. Passionate about continuous improvement, I stay current with React and frontend trends to deliver high-quality, modern web solutions.",
    href: "",
  },
  {
    num: "03",
    title: "Next.js Development",
    description: "As a Next.js developer, I craft high-performance, SEO-friendly web applications by leveraging Next.js’s powerful features. My expertise lies in building server-rendered and statically generated applications that prioritize both speed and scalability. I use Next.js’s advanced routing, API integration, and optimization capabilities to deliver seamless user experiences and fast load times. With a focus on clean architecture and efficient coding practices, I’m dedicated to creating applications that are both visually engaging and technically robust.",
    href: "",
  },
  {
    num: "04",
    title: "Node.js Developer",
    description: "I build scalable and high-performance backend systems using Node.js and Express.js, with strong expertise in designing and integrating RESTful APIs and GraphQL APIs. I work with databases like MongoDB, PostgreSQL, and MySQL, ensuring efficient data management and optimized queries. With knowledge of authentication (JWT, OAuth), middleware, and microservices architecture, I create secure and maintainable server-side applications. I am also experienced in Docker, CI/CD pipelines, and cloud deployment (AWS, GCP, Azure) to deliver production-ready solutions.",
    href: "",
  },
  {
    num: "5",
    title: "Java Full-Stack Developer",
    description: "I specialize in building end-to-end web applications using Java (Spring Boot, Hibernate, JPA) on the backend and modern front-end frameworks like React.js/Angular. My expertise includes developing RESTful APIs, managing databases (MySQL, PostgreSQL, MongoDB), and creating responsive, user-friendly interfaces. With experience in Git, Docker, CI/CD pipelines, and cloud deployment (AWS/Azure), I ensure applications are secure, scalable, and high-performing. I enjoy bridging the gap between front-end design and server-side logic, delivering complete solutions that align with business needs.",
    href: "",
  },
  {
    num: "06",
    title: "UI/UX Design",
    description: "I create intuitive, user-centered designs that enhance functionality and engagement across digital experiences. With a focus on usability and aesthetic balance, I craft interfaces that are not only visually compelling but also accessible and efficient. My process involves understanding user needs, prototyping, and iterating to achieve designs that prioritize a seamless user journey. From wireframes to high-fidelity designs, I ensure each element aligns with the overall user experience, aiming to create products that are both beautiful and easy to use.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-12 xl:py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
