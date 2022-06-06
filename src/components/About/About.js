import React from "react";
import bg from "../../Assests/images/bg.jpg";
import bga from "../../Assests/images/bg-1.jpg";
import "./About.css";
const About = (props) => {
  console.log(props.item);
  return (
    <>
      <div className="About-area">
        <img data-aos="fade-up-right" data-aos-duration="2000" src={bga} alt="" />
        <img data-aos="fade-up-left" data-aos-duration="2000" src={bg} alt="" />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className="About-details">
        <h1>About <span>Us</span></h1>

        <p>
          The Oyster Perpetual Yacht-Master 42 in 18 ct yellow gold with a black
          dial and an Oysterflex bracelet. Meteorite and black dial From across
          the Solar System Meteorite comes from the heart of an asteroid or
          possibly even a planet that has exploded, propelling material across
          the Solar System until chance brings it into our planet’s orbit and
          gravity pulls it to Earth. During its journey, the centre of the
          meteorite is gradually transformed, producing highly unusual metallic
          patterns, resulting from the very slow cooling of molten asteroid
          cores. The designers at Rolex create from these configurations a
          unique treasure for some of the most prestigious models, including
          this Cosmograph Daytona.
        </p>
      </div>
    </>
  );
};

export default About;
