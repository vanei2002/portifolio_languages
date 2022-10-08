import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />,link: "https://www.linkedin.com/in/vanei-mendes-353bb71ab/" },
  { name: "github", icon: <FaGithub />,link: "https://github.com/vanei2002"  },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/vaneimendes016/" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
