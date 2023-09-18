import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize .text-info dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="CNC programmer"
              company="Ra-OL SRL"
              companyLink="https://www.listafirme.ro/ra-ol-srl-1814821/"
              time="2020-2022"
              address="Timisoara, Romanaia"
              work="I worked as a Fanuc CNC programmer and operator in a team of qualified specialists in the
               field of precision mechanical operations.
               There I developed my programming skills in the CNC language as well as those related to precision mechanics"
            />

            <Details
              position="Mechanical design engineer"
              company="Hawle-H SRL"
              companyLink="https://www.lifelifts.gr/en/stair-lifts/chair-stairlifts-for-curved-stairway/hawle-hw10-hw11"
              time="Summer 2022"
              address="Biled, Timisoara, Romania"
              work="In this company I work as a mechanical design engineer. I design chairs and guides for stairs, 
              for old people and people with locomotor disabilities. In addition to design, I do tests and mechanical 
              simulations and solve the problems 
              that arise in the manufacturing department of chairs and production equipment"
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
