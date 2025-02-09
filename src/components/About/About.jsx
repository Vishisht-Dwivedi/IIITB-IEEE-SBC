import React, { useEffect, useRef } from 'react';
import './About.css';
import cs from '../../assets/logos/cs.webp';
import golden from '../../assets/golden.webp';
import iiitb from '../../assets/logos/iiitb.png';
import logo from '../../assets/logos/logo.png';
import inog from '../../assets/inog.jpg';

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = (error) => reject(error);
        document.body.appendChild(script);
      });
    };

    // Load your external script here
    loadScript('/src/assets/PhyBalls.js')
      .then(() => {
        console.log("okay");
      })
      .catch((error) => {
        console.error('Error loading external script:', error);
      });
  }, []);

  return (
    <>
      <section className="Abouts">
        <div className="Heading">
          <h1>About IIIT Bhopal</h1>
        </div>
        <div className="iiitb">
          <div className="iiitb-wrapper">
            <img src={iiitb} alt="" />
            <div className="label">
              <p>
                Indian Institute of Information Technology Bhopal is an Institute
                of National Importance, established in 2017 under the
                Public-Private Partnership (PPP) model. It focuses on quality
                education, research, and technological innovation. The institute
                fosters a dynamic learning environment with industry collaborations
                and cutting-edge infrastructure. Currently operating from MANIT
                Bhopal, it aims to equip students with advanced technical knowledge
                and problem-solving skills. With a strong emphasis on academic
                excellence and practical learning, IIIT Bhopal prepares individuals
                for careers in technology, entrepreneurship, and research,
                contributing to the nation's digital growth and innovation-driven
                economy.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* IEEE */}
      <section className="Abouts">
        <canvas ref={canvasRef} className='canvas' />
        <div className="Heading">
          <h1>IEEE</h1>
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
          <h1>IEEE Computer Society</h1>
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
