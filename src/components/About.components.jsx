import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CountUp from "react-countup";
import About from "../assets/about.png";

const AboutComponents = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section ref={ref} id="about" className=" section">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-10 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1"
          >
            <h2 className=" h2 text-accent">About Me</h2>
            <h3 className=" h3 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              necessitatibus ipsa aliquid quod facere quibusdam!
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quaerat cumque fugiat! Illo, consectetur architecto placeat
              molestias omnis dignissimos nesciunt!
            </p>
            {/* stats */}
            <div className=" flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className=" font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>{" "}
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={4} /> : null}
                </div>
                <div className=" font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>{" "}
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className=" font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className=" flex gap-x-8 items-center">
              <button className=" btn btn-lg">Contact Me</button>
              <a href="#" className=" text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponents;