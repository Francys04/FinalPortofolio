import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/4challange.JPG";
import proj2 from "../../public/images/projects/movie.JPG";
import proj3 from "../../public/images/projects/eda.JPG";
import proj4 from "../../public/images/projects/eda1.JPG";
import proj5 from "../../public/images/projects/price.JPG";
import proj6 from "../../public/images/projects/gold.JPG";
import proj7 from "../../public/images/projects/leads.JPG";
import proj8 from "../../public/images/projects/micro.JPG";
import proj9 from "../../public/images/projects/fast.JPG";
import proj10 from "../../public/images/projects/seleniumb.JPG";
import proj11 from "../../public/images/projects/snake.JPG";
import proj12 from "../../public/images/projects/tetris.JPG";
import proj13 from "../../public/images/projects/checkpower.JPG";
import proj14 from "../../public/images/projects/poweruser.JPG";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          {/* <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link> */}
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Francys04 | Projects Page</title>
        <meta
          name="description"
          content="I created this portfolio to understand coding in javascript with the help of Next.js. 
          In this website I introduced the main projects that helped me to discover the possibilities and 
          functionalities of programming languages 
          such as Python, JS, PostgreSQL, MySQL and the DataSince libraries"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="All you have to do is to start!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Python | Data Analysis Project"
                title="Web Scraping and Data Analysis"
                summary="This project is a Python script for web scraping real estate data from various locations, cleaning and analyzing the data, and then performing statistical analysis on the dataset. It utilizes libraries such as BeautifulSoup, Selenium, Pandas, Matplotlib, and PostgreSQL for data extraction, cleaning, and analysis."
                img={proj1}
                link="https://francys04.github.io/Data_Challange_DS_Py/"
                github="https://github.com/Francys04/Data_Challange_DS_Py"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Python | Data Analysis & Machine Learning"
                title="Movie Recomandation"
                img={proj2}
                link="/"
                github="https://github.com/Francys04/Movie_Reco_DS_Py"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Python | Data Analysis & Machine Learning"
                title="EDA - Banking Analysis"
                img={proj4}
                link="/"
                github="https://github.com/Francys04/EDA_Banking_Data_DS_Py"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Python | Data Analysis & Machine Learning"
                title="Exploring Data Analysis"
                summary="The provided code is a Python script that performs various statistical analyses and data visualization tasks on a dataset containing information related to insurance charges. The code utilizes libraries such as pandas, numpy, scipy, statsmodels, and matplotlib for data manipulation, statistical analysis, and creating visualizations."
                img={proj3}
                link="https://francys04.github.io/EDA_Analysis_DS_Py/"
                github="https://github.com/Francys04/EDA_Analysis_DS_Py"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Python | Data Since & Machine Learning"
                img={proj5}
                title="Price prediction"
                link="https://github.com/Francys04/House_price_prediction_DS_Py"
                github="https://github.com/Francys04/House_price_prediction_DS_Py"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Python | Data Since & Machine Learning"
                img={proj6}
                title="Gold price prediction"
                link="/"
                github="https://github.com/Francys04/Gold_price_DS_Py"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Python | Managment Django-Framework"
                title="Customer relationship management"
                summary="A CRM system gathers, links, and analyzes all collected customer data, including contact information, interactions with company representatives, purchases, service requests, assets, and quotes/proposals. The system then lets users access that data and understand what happened at each touchpoint."
                img={proj7}
                link="https://francys04.github.io/CRM_Django_Frame_Py/"
                github="https://github.com/Francys04/CRM_Django_Frame_Py"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Python | RestAPI"
                title="Wikipedia API using FastAPI"
                img={proj8}
                link="/"
                github="https://github.com/Francys04/AWS_Micro_Fast_API_Py"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Python | FastAPI"
                title="Fast API Web Scraper"
                img={proj9}
                link="/"
                github="https://github.com/Francys04/Fast_API_Web_Scrap_PY"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Python | Selenium"
                title="SeleniumBase Browser Automation (CI/CD)"
                summary="In this project i make some automation tests and running webdriver. For that i use https://practice.automationbro.com/ for verify title of url, working with input fields, find multiple elements, POM (Page Object Model), handlind wait commands, Jenkis and Github integrations and more."
                img={proj10}
                link="https://francys04.github.io/SeleniumBase_Frame_Py/"
                github="https://github.com/Francys04/SeleniumBase_Frame_Py"
              />
            </div>   
            <div className="col-span-12">
              <FeaturedProject
                type="JavaScript | Game Development"
                title="Snake Game in JavaScript"
                summary="This is a classic Snake game implemented in JavaScript, using the HTML5 Canvas element for rendering. The game allows players to control a snake that grows longer as it consumes food while avoiding collisions with the game boundaries and itself."
                img={proj11}
                link="https://francys04.github.io/Snake_game_JS/"
                github="https://github.com/Francys04/Snake_game_JS"
              />
            </div>  
            <div className="col-span-12">
              <FeaturedProject
                type="JavaScript | Game Development"
                title="Tetris in JavaScript"
                summary="This repository contains the source code for a Tetris game implemented in React. The game features a playable Tetris interface with keyboard controls for moving and rotating tetrominoes. It utilizes custom React hooks and styled components for building the game logic and user interface."
                img={proj12}
                link="https://francys04.github.io/Tetris_JS/"
                github="https://github.com/Francys04/Tetris_JS"
              />
            </div> 
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="PowerShell | Services"
                title="Service Checker and Email Alert Script"
                img={proj13}
                link="/"
                github="https://github.com/Francys04/Service_checker_PowerShell"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="PowerShell | Services"
                title="PowerShell Active Directory User Management-Creation Script"
                img={proj14}
                link="/"
                github="https://github.com/Francys04/Fast_API_Web_Scrap_PY"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
