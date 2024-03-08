import React from "react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import Image from "../assets/avatar.svg";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const BannerComponents = () => {
  return (
    <section
      id="home"
      className=" min-h-[80vh] lg:min-h-[75vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-16">
          {/* text */}
          <div className="flex flex-col flex-1 text-center lg:justify-center font-secondary lg:text-left max-w-[700px]">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">I am</span>
              <TypeAnimation
                sequence={[" Developer", 2000, " Aung Zin Latt", 2000]}
                speed={50}
                wrapper="span"
                className=" text-accent"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis necessitatibus ipsum nisi esse porro iste similique,
              ratione nostrum nobis ut!
            </motion.p>
            {/* btn */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className=" btn btn-sm">Contact me</button>
              <a href="#" className=" text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex lg:items-center lg:justify-center flex-1 max-w-[362px]"
          >
            <img src={Image} alt="img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponents;
