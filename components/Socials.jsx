import Link from "next/link";

import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/rnileshk/"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rnilesh/"},
    {icon: <FaTwitter />, path: "https://x.com/rnilesh_dev"},
    {icon: <FaEnvelope />, path: "https://mail.google.com/mail/u/0/?fs=1&to=imnileshkumar06@gmail.com&su=SUBJECT&body=BODY&tf=cm"},
    {icon: <FaWhatsapp />, path: "https://wa.link/yqc1ip"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100069901102714&mibextid=ZbWKwL"},
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
