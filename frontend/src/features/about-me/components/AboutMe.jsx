import React from "react";
import aboutMeImg from "../../../assets/images/about-me-pic.jpg";

const AboutMe = () => {
  return (
    <div>
      <div>
        <h1>About Me!</h1>
        <p>
          My name is Asim Williams. I am a Technology Leader, Explorer,
          Educator, and Musician from the city of Detroit.
          <br />
          <br />
          My mission is to be a part of teams that invent technology and music,
          through entrepreneurship, that universally improves fundamental
          aspects of life.
          <br />
          <br />
          I aspire to leave a legacy where it's said that "Asim helped the world
          become a place where it’s residents thrive and prosper through
          technology innovation and entrepreneurship by helping us":
          <br />
          <br />
          Build the cultural infrastructure necessary for our youth to become
          technology leaders at all levels of abstraction. From using
          applications to be content creators, to writing algorithms that enable
          efficient student transportation, to creating simulations for H2 IC
          engines. By developing the educational pathways and programs necessary
          to achieve excellence in technology; Instead of being pacified by
          exposure to technology 🥇
          <br />
          <br />
          Empowering our students to:
          <br />
          1. Get paid 🤑
          <br />
          2. Get ready to succeed academically in the most competitive and
          rigorous fields (STEM) 🎓
          <br />
          3. Get the runway necessary to master the skills needed to build and
          have ownership of their entrepreneurial ideas for making the world a
          better place ❤️‍🩹🌍
          <br />
          <br />
          Optimize Detroit's strategic decisions, by creating ethical data
          systems that activate the past, understand the present and prepare us
          for the future 🔮
          <br />
          <br />
          Create mobility infrastructure that sustainably facilitates equitable
          and effective access to resources and opportunities 🚇
          <br />
          <br />
          Become a global epicenter of arts and culture by patronizing art and
          music production 🎭
          <br />
          <br />
          My passion is fueled most intensely by this belief: For centuries
          African American people have been systematically excluded from seeing,
          accessing, being the keeper of and achieving deep understanding of the
          most transformative manifestation of humanities ability to adapt to
          its surroundings, control its circumstances and augment its abilities.
          That transformative manifestation being Technology. It is a human
          rights crisis that has ubiquitous and cascading negative social,
          economic and political consequences.
        </p>
      </div>
      <div>
        <img src={aboutMeImg} alt="pic-of-asim" width={410} height={512} />
      </div>
    </div>
  );
};

export default AboutMe;
