import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact } from "react-icons/di";
import {SiTypescript, SiBootstrap} from "react-icons/si"
import {FaSass} from "react-icons/fa"


import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  {id: "bootstrap", name: "BootStrap", icon: <SiBootstrap /> },
  {id: "sass", name: "Sass", icon: <FaSass/> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2> 
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
