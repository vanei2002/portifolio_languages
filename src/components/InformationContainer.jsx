import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";


const information =[
  {title: "Telefone", description:"(11) 94065-8598", icon: <AiFillPhone id="phone-icon"/>},
  {title: "E-mail", description:"vanei.jesus016@gmail.com", icon: <AiOutlineMail id="email-icon"/>},
  {title: "Localização", description:"São Paulo / SP", icon: <AiFillEnvironment id="pin-icon"/>},
]


const InformationContainer = () => {
  return (
    <section id="information">
        {information.map(info => (
            <div className="info-card">
              {info.icon}
                <div>
                  <h3>{info.title}</h3>
                  <p>{info.description}</p>
                </div>
            </div>
        ))}
    </section>
  );
};

export default InformationContainer;
