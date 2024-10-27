import Link from "next/link";

import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedinIn />, path: ""},
    {icon: <FaTwitter />, path: ""},
    {icon: <FaEnvelope />, path: ""},
    {icon: <FaWhatsapp />, path: ""},
    {icon: <FaFacebook />, path: ""},
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
      })}
    </div>
  );
};

export default Socials;
