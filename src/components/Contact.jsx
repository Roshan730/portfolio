import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";

const Contact = () => {
  const [disableBtn, setDisableBtn] = useState(false);

  const animations = {
    form: {
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
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form
          {...animations.form}
          action="https://formspree.io/f/mrgdnkdy"
          method="POST"
        >
          <h2>Contact Me</h2>
          <input
            type="text"
            name=""
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="Message"
            placeholder="Your Message"
            required
            autoComplete="off"
          />
          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
            value={"send"}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Hello" />
      </aside>
    </div>
  );
};

export default Contact;
