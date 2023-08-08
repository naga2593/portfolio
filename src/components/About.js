import React from "react";

const About = () => {
  console.log("this is About page")
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        As a front-end developer, I am passionate about creating visually appealing and user-friendly websites
         and web applications. With a keen eye for design and a strong understanding of user experience principles, I strive to build interfaces that not only look great but also provide seamless interactions for users..
        </p>

        <br />

        <p className="text-xl">
         I have honed my skills in HTML, CSS, and JavaScript, staying up-to-date with the latest front-end frameworks and libraries to keep pace with the ever-evolving web landscape.
        I believe that collaboration and communication are essential for delivering successful projects. Working closely with designers, back-end developers, and other stakeholders, I ensure that the vision for a website or application is translated into a functional and visually appealing reality.
        </p>
      </div>
    </div>
  );
};

export default About;
