import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://avatars.githubusercontent.com/u/93070996?s=400&u=de34d82f243600baaff6da12e189075ae2747bfd&v=4"
          }
          alt="Roshan Kumar Yadav"
        />

        <h2>Roshan Kumar Yadav</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.instagram.com/_phoenix._exe/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Roshan730" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
