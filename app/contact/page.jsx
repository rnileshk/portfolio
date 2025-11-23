"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-7033239572",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "imnileshkumar06@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Muzaffarpur, Bihar",
  },
];

const Contact = () => {
  const [service, setService] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("service", service); // add selected service
    formData.append("access_key", "b8a9ee68-b7e2-4145-8dbe-b8b7a9f20b7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      event.target.reset();
      setService("");
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 p-10 bg-[#272729] rounded-xl"
            >
              <input
                type="hidden"
                name="access_key"
                value="b8a9ee68-b7e2-4145-8dbe-b8b7a9f20b7a"
              />

              <h3 className="text-4xl text-accent">Let's work together</h3>

              <p className="text-white/60">
                I'm a passionate React developer and UI/UX designer with a keen
                eye for detail and a love for crafting seamless user
                experiences. Let's connect and create something exceptional
                together!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="First name" required />
                <Input name="lastname" type="text" placeholder="Last name" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="text" placeholder="Phone number" required />
              </div>

              {/* Select Service */}
              <Select onValueChange={(value) => setService(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="full-stack">Full Stack Developer</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />

              <Button type="submit" size="md" className="max-w-40 py-2 text-2xl">
                Send message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex item-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
