import React, { useEffect, useRef } from 'react';
import './About.css';
import cs from '../../assets/logos/cs.webp';
import iiitb from '../../assets/logos/iiitb.png';
import logo from '../../assets/logos/logo.png';

const About = () => {
  return (
    <>
      <section className="AboutIIITB" id="AboutIIITB">
        <div className="Heading">
          <h2>About IIIT Bhopal</h2>
        </div>
        <div className="iiitb">
          <div className="iiitb-wrapper">
            <img src={iiitb} alt="" />
            <div className="label">
              <ul>
                <li>📍 Established: 2017</li>
                <li> 🏛 Institute Type: Institute of National Importance</li>
                <li> 📚 Programs: B.Tech in CSE, ECE, and IT</li>
              </ul>
              <p>The Indian Institute of Information Technology Bhopal (IIIT Bhopal) is one of the IIITs established under the Public-Private Partnership (PPP) model by the Government of India. It aims to nurture excellence in engineering, research, and innovation in the fields of Computer Science, Electronics, and Information Technology.</p>
              <ul>
                <li>🔹 <strong>Mission:</strong> To produce highly skilled professionals equipped to tackle modern technological challenges</li>
                <li>🔹 <strong>Collaborations:</strong> Strong industry and academic partnerships to enhance student opportunities.</li>
                <li>🔹 <strong>Campus Life:</strong> A dynamic student community with technical clubs, hackathons, and research opportunities.</li>
              </ul>
              <p>With a commitment to innovation, entrepreneurship, and academic excellence, IIIT Bhopal continues to grow as a hub for future tech leaders.</p>
            </div>
          </div>
        </div>
      </section>
      {/* IEEE */}
      <section className="AboutIEEE" id="AboutIEEE">
        <canvas className='canvas' />
        <div className="Heading">
          <h2>IEEE</h2>
        </div>
        <div className="IEEE">
          <div className="IEEELogoWrapper">
            <div className="logoBG">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="IEEE_Text">
            <p>
              IEEE, or the Institute of Electrical and Electronics Engineers, is
              a professional organization that promotes technological advancement.
              It's the world's largest technical professional society.
            </p>
          </div>
        </div>

        {/* Computer Society */}
        <div className="Heading">
          <h2>IEEE Computer Society</h2>
        </div>
        <div className="IEEE_CS">
          <div className="IEEE_Text">
            <p>
              IEEE Computer Society is a technical society of the Institute of
              Electrical and Electronics Engineers dedicated to computing, namely
              the major areas of hardware, software, standards, and people,
              "advancing the theory, practice, and application of computer and
              information processing science and technology."
            </p>
          </div>
          <div className="IEEELogoWrapper">
            <div className="logoBG">
              <img src={cs} alt="" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
