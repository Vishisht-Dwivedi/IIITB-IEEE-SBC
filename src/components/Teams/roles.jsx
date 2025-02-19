import React from "react";
import { useRef, useEffect } from "react";
import m2 from '../../assets/m2.jpg';

const Roles = ({ teamArray }) => {
    // Got the intersection observer code from MDN...dont know exactly how it works
    const imgRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, { threshold: 0.8 });
        imgRefs.current.forEach((img) => {
            observer.observe(img);
        });
        return () => observer.disconnect();
    }, []);
    //My code starts here
    return teamArray.map((student, index) => (
        <div className="students" key={student.key}>
            <img
                src={m2}
                className="animations"
                alt=""
                ref={(el) => (imgRefs.current[index] = el)}
            />
            <div className="studentInside">
                <h5>{student.name}</h5>
                <h5>{student.role}</h5>
            </div>
        </div>
    ));
};
export default Roles;