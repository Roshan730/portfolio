import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

const Home = ({ ratio }) => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Roshan Kumar Yadav
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Frontend Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:krishabh730@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article data-special>
              <p>Contact</p>
              <span>krishabh730@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>{/* <img src="" alt="Roshan" /> */}</section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
