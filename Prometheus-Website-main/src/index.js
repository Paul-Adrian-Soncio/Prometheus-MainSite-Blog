import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
import Rellax from "rellax";

import prometheusLogo from "./photos/PrometheusLogo.png";
import prometheusLogowebp from "./photos/PrometheusLogo.webp";

import astronautHD from "./videos/AstronautLoop.mp4";
import astronautSD from "./videos/AstronautLoop.webm";
import poster1 from "./photos/poster.webp";
// import longBG from './photos/longbg.png';
import longBGwebp from "./photos/longbg.webp";

//rocks
// import rock1 from "./photos/rocks/Introrocks.png";
// import rock1webp from "./photos/rocks/Introrocks.webp";

import rock3 from "./photos/rocks/Services-Meteor.png";
import rock3webp from "./photos/rocks/Services-Meteor.webp";
import rock4 from "./photos/rocks/Team-Meteor.png";
import rock4webp from "./photos/rocks/Team-Meteor.webp";
import rock5 from "./photos/rocks/AdviserstoEndblock--Meteors.png";
import rock5webp from "./photos/rocks/AdviserstoEndblock--Meteors.webp";
// import rock6 from './photos/rocks/Endblock-rocks1.png';
// import rock6webp from './photos/rocks/Endblock-rocks1.webp';
// import rock7 from './photos/rocks/Endblock-rocks2.png';
// import rock7webp from './photos/rocks/Endblock-rocks2.webp';
import moon1 from "./photos/rocks/moon.png";
import moon1webp from "./photos/rocks/moon.webp";

import acenergyLogo from "./photos/logos/ACEnergyLogo.png";
import acenergyLogowebp from "./photos/logos/ACEnergyLogo.webp";
import doubleteamLogo from "./photos/logos/DoubleTeamLogo.png";
import doubleteamLogowebp from "./photos/logos/DoubleTeamLogo.webp";
import damireshillsLogo from "./photos/logos/damireshillslogo.png";
import damireshillsLogowebp from "./photos/logos/damireshillslogo.webp";
import fordLogo from "./photos/logos/FordLogo.png";
import fordLogowebp from "./photos/logos/FordLogo.webp";
import hondaLogo from "./photos/logos/Honda.png";
import hondaLogowebp from "./photos/logos/Honda.webp";
import ibcLogo from "./photos/logos/IBCLogo.png";
import ibcLogowebp from "./photos/logos/IBCLogo.webp";
import iurLogo from "./photos/logos/IUR.png";
import iurLogowebp from "./photos/logos/IUR.webp";
import laylaLogo from "./photos/logos/Layla.png";
import laylaLogowebp from "./photos/logos/Layla.webp";
import marriotLogo from "./photos/logos/Marriott.png";
import marriotLogowebp from "./photos/logos/Marriott.webp";
import dailyguardianLogo from "./photos/logos/DGLogo.png";
import dailyguardianLogowebp from "./photos/logos/DGLogo.webp";
import morepowerLogo from "./photos/logos/MOREPowerLogo.png";
import morepowerLogowebp from "./photos/logos/MOREPowerLogo.webp";
import metroiloiloLogo from "./photos/logos/MetroIloiloBulk.jpg";
import metroiloiloLogowebp from "./photos/logos/MetroIloiloBulk.webp";
import metropacificiloiloLogo from "./photos/logos/MetroPacificIloiloWater.png";
import metropacificiloiloLogowebp from "./photos/logos/MetroPacificIloiloWater.webp";
import isatLogo from "./photos/logos/ISAT.png";
import isatLogowebp from "./photos/logos/ISAT.webp";
import ap4Logo from "./photos/logos/ap4.png";
import ap4Logowebp from "./photos/logos/ap4.webp";
import globalshapersLogo from "./photos/logos/GlobalShapers.png";
import globalshapersLogowebp from "./photos/logos/GlobalShapers.webp";
import jamjamLogo from "./photos/logos/Jamjam.png";
import jamjamLogowebp from "./photos/logos/Jamjam.webp";
import ferjbironLogo from "./photos/logos/Ferj.png";
import ferjbironLogowebp from "./photos/logos/Ferj.webp";

import iconBS from "./photos/icons/brandingservicesicon.png";
import iconBSwebp from "./photos/icons/brandingservicesicon.webp";
import iconCS from "./photos/icons/creativeservicesicon.png";
import iconCSwebp from "./photos/icons/creativeservicesicon.webp";
import iconDS from "./photos/icons/digitalmarketingicon.png";
import iconDSwebp from "./photos/icons/digitalmarketingicon.webp";
import iconEM from "./photos/icons/eventmanagementicon.png";
import iconEMwebp from "./photos/icons/eventmanagementicon.webp";
import iconMS from "./photos/icons/mediaservicesicon.png";
import iconMSwebp from "./photos/icons/mediaservicesicon.webp";
import iconSM from "./photos/icons/socialmediaicon.png";
import iconSMwebp from "./photos/icons/socialmediaicon.webp";
import iconST from "./photos/icons/strategyservicesicon.png";
import iconSTwebp from "./photos/icons/strategyservicesicon.webp";

// import secondBG from './photos/secondbg.jpg';
import secondBGwebp from "./photos/secondbg.webp";

import gino from "./photos/team/gino.jpg";
import ginowebp from "./photos/team/gino.webp";
import jonas from "./photos/team/jonas.jpg";
import jonaswebp from "./photos/team/jonas.webp";
import lcid from "./photos/team/lcid.jpg";
import lcidwebp from "./photos/team/lcid.webp";
import tin from "./photos/team/tin.jpg";
import tinwebp from "./photos/team/tin.webp";
import rey from "./photos/team/rey.jpg";
import reywebp from "./photos/team/rey.webp";

import tessa from "./photos/tessa.jpg";
import tessawebp from "./photos/tessa.webp";
import lemuel from "./photos/sirlemuel.jpg";
import lemuelwebp from "./photos/sirlemuel.webp";
// import footerBG from './photos/footer.png';
import footerwebp from "./photos/footer.webp";

import { motion } from "framer-motion";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHeaderToggled: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isHeaderToggled: !state.isHeaderToggled,
    }));
  }

  render() {
    return (
      <header class="text-gray-100 body-font bg-gradient-to-b from-black w-full max-sm:z-10 relative">
        <motion.nav
          animate={{ scale: [0.8, 1] }}
          transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.4 }}
          class="py-2 md:py-4"
        >
          <div class="container px-4 mx-auto md:flex md:items-center">
            <div class="flex justify-between items-center">
              <a href="#" class="font-bold text-xl text-prometheus-gold">
                <picture>
                  <source srcset={prometheusLogowebp} type="image/webp" />
                  <img
                    class="w-200px h-auto"
                    src={prometheusLogo}
                    alt="Prometheus Logo"
                  />
                </picture>
              </a>
              <button
                class="border border-solid border-white px-3 py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden"
                onClick={this.handleClick}
              >
                <b>☰</b>
              </button>
            </div>
            <div
              className={
                (this.state.isHeaderToggled ? "hidden " : "flex ") +
                "md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 max-sm:bg-black font-bold text-2xl"
              }
            >
              <a
                href="#"
                onClick={this.handleClick}
                class="p-2 lg:px-4 md:text-sm lg:text-base md:mx-2 font-visby text-white rounded bg-prometheus-gold"
              >
                HOME
              </a>
              <a href="#about" class="nav-items" onClick={this.handleClick}>
                ABOUT
              </a>
              <a href="#services" class="nav-items" onClick={this.handleClick}>
                SERVICES
              </a>
              <a href="#team" class="nav-items" onClick={this.handleClick}>
                TEAM
              </a>
              <a href="#clients" class="nav-items" onClick={this.handleClick}>
                CLIENTS
              </a>
              <a href="#advisors" class="nav-items" onClick={this.handleClick}>
                ADVISORS
              </a>
              <a href="/" class="nav-items" onClick={this.handleClick}>
                BLOG
              </a>

              <a
                href="#contact"
                onClick={this.handleClick}
                class="p-2 lg:px-4 md:mx-2 md:text-sm lg:text-base text-prometheus-gold text-center border border-solid border-prometheus-gold rounded hover:bg-prometheus-gold hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                CONTACT
              </a>
            </div>
          </div>
        </motion.nav>
      </header>
    );
  }
}

// class Rock1 extends React.Component {
//   render() {
//     return (
//       <picture>
//         <source srcset={rock1webp} type="image/webp" />
//         <img
//           class="rellax z-30 absolute xl:-bottom-40 2xl:-bottom-80 w-1/6 h-auto"
//           data-rellax-speed="2"
//           alt="rock"
//           src={rock1}
//         />
//       </picture>
//     );
//   }
// }
class Moon1 extends React.Component {
  componentDidMount() {
    // We can keep a reference to Rellax in case we need it later
    this.rellax = new Rellax(".rellax", {
      center: true,
    });
  }

  render() {
    return (
      <picture>
        <source srcset={moon1webp} type="image/webp" />
        <img
          class="rellax max-md:hidden absolute -z-1 lg:-top-40 right-0 w-1/12 h-auto"
          alt="rock"
          data-rellax-zindex="-1"
          data-rellax-mobile-speed="-2"
          data-rellax-tablet-speed="-2"
          data-rellax-speed="-3"
          src={moon1}
        />
      </picture>
    );
  }
}
class Moon2 extends React.Component {
  render() {
    return (
      <picture>
        <source srcset={moon1webp} type="image/webp" />
        <img
          class="rellax absolute -left-20 -top-28 xl:top-0 w-1/6 h-auto"
          alt="rock"
          data-rellax-speed="-3"
          src={moon1}
        />
      </picture>
    );
  }
}
// function openTab() {
//   window.open('http://m.me/PrometheusPr?ref=Website');
// }

const teamDescMotion = {
  rest: {
    opacity: 0,
    scale: 1,
    bounce: 0,
    visibility: "hidden",
    type: "tween",
  },
  hover: {
    scale: 1,
    opacity: 1,
    bounce: 0,
    type: "tween",
    visibility: "visible",
  },
};

const teamMotion = {
  hover: {
    scale: 1.1,
    bounce: 0,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex text-center justify-center items-center">
            <p className="ml-3 font-medium text-prometheus-gold">
              Prometheus is CDM and Google Analytics Qualification certified!
            </p>
          </div>
        </div>
      </div>
    </div>
    <main class="z-30 relative">
      <div class="h-screen overflow-hidden relative">
        <video
          class="overflow-hidden absolute t-0 l-0 h-full w-full object-cover"
          poster={poster1}
          preload="auto"
          playsInline
          loop
          autoPlay
          muted
        >
          <source src={astronautSD} type="video/webm" />
          <source src={astronautHD} type="video/mp4" />
        </video>
        <Header />
        <section>
          <motion.nav
            animate={{ scale: [0.8, 1] }}
            transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.4 }}
            class="sm:relative flex h-auto top-1/2 absolute md:h-screen w-full overflow-hidden max-md:justify-center items-center"
          >
            <h1 class="relative bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray md:left-20 xl:bottom-20 2xl:left-40">
              <p class="font-display text-3xl sm:text-4xl xl:text-6xl 2xl:text-7xl text-left">
                <span>YOUR BRAND,</span>
              </p>
              <p class="font-display text-3xl sm:text-4xl xl:text-6xl 2xl:text-7xl text-left">
                REIMAGINED.
              </p>
            </h1>
          </motion.nav>
        </section>
      </div>
      <div
        class="bg-cover bg-bottom bg-black bg-no-repeat"
        style={{ backgroundImage: `url(${longBGwebp})` }}
      >
        <section id="about">
          <div class="w-80p m-auto">
            <div class="relative w-100p pb-5625pc overflow-hidden">
              <iframe
                loading="lazy"
                data-autoplay="true"
                data-lazy="true"
                class="t-0 l-0 absolute w-full h-full"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D208857277659564&show_text=false&appId=270558316298470&mute=0&autoplay=true"
                title="Facebook video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
        <section class="mt-10 mb-20">
          <div class="relative z-10 items-center justify-center">
            <Moon1 />
            <div class=" bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray mb-20">
              <div class="max-sm:text-white text-sm md:text-2xl xl:text-5xl 2xl:text-6xl font-display z-20 text-center">
                WE'RE A TEAM OF MARKETERS
              </div>
              <div class="max-sm:text-white text-sm md:text-2xl xl:text-5xl 2xl:text-6xl font-display z-20 text-center">
                WHO LOVE STORYTELLING
              </div>
            </div>
            {/* Hi Jona, Paul, Mc*/}
            <div class="prometheus-text font-visby text-center mt-10">
              We promote your brand through strategically{" "}
            </div>
            <div class="prometheus-text font-visby text-center">
              organized content with technical precision{" "}
            </div>
            <div class="prometheus-text font-visby text-center">
              and creative skill.
            </div>
          </div>
        </section>
        <section id="services">
          <div class="relative h-auto xl:h-screen  flex flex-col items-center">
            <h2 class="text-xl xl:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray text-center mb-5">
              SERVICES
            </h2>
            <div class="flex flex-shrink flex-wrap justify-center lg:w-8/12">
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <picture>
                  <source srcset={iconSTwebp} type="image/webp" />
                  <img
                    class="image-services"
                    alt="strategy services"
                    src={iconST}
                  />
                </picture>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <picture>
                  <source srcset={iconBSwebp} type="image/webp" />
                  <img
                    class="image-services"
                    alt="brand services"
                    src={iconBS}
                  />
                </picture>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <picture>
                  <source srcset={iconCSwebp} type="image/webp" />
                  <img
                    class="image-services"
                    alt="creative services"
                    src={iconCS}
                  />
                </picture>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <picture>
                  <source srcset={iconDSwebp} type="image/webp" />
                  <img
                    class="image-services"
                    alt="digital marketing services"
                    src={iconDS}
                  />
                </picture>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <picture>
                  <source srcset={iconMSwebp} type="image/webp" />
                  <img
                    class="image-services"
                    alt="media services"
                    src={iconMS}
                  />
                </picture>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <picture>
                  <source srcset={iconSMwebp} type="image/webp" />
                  <img
                    class="image-services"
                    alt="social media services"
                    src={iconSM}
                  />
                </picture>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} class="grid-service">
                <picture>
                  <source srcset={iconEMwebp} type="image/webp" />
                  <img
                    class="image-services"
                    alt="event management"
                    src={iconEM}
                  />
                </picture>
              </motion.div>
            </div>
            <picture>
              <source srcset={rock3webp} type="image/webp" />
              <img
                class="rellax absolute bottom-0 left-0 w-2/6 auto"
                alt="rock"
                data-rellax-speed="4"
                src={rock3}
              />
            </picture>
          </div>
        </section>
      </div>
      <section id="clients">
        <div class="relative bg-white h-auto flex flex-col items-center">
          <div class="p-4 mx-auto text-center lg:mt-20">
            <h2 class="text-lg sm:text-xl md:text-3xl 2xl:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-b from-prometheus-gray to-black text-center md:mb-10">
              BRANDS WE'VE WORKED WITH
            </h2>
          </div>
          <div class="sm:w-10/12 flex flex-wrap flex-shrink flex-row place-items-center items-center content-center justify-center mb-10">
            <div class="logo-container lg:w-1/4">
              <picture>
                <source srcset={dailyguardianLogowebp} type="image/webp" />
                <img
                  class="w-full  m-auto"
                  alt="daily guardian logo"
                  src={dailyguardianLogo}
                />
              </picture>
            </div>
            <div class="logo-container lg:w-1/4">
              <picture>
                <source srcset={morepowerLogowebp} type="image/webp" />
                <img
                  class="w-full m-auto"
                  alt="more power logo"
                  src={morepowerLogo}
                />
              </picture>
            </div>
            <div class="logo-container lg:w-1/4">
              <picture>
                <source srcset={acenergyLogowebp} type="image/webp" />
                <img
                  class="w-full max-sm:w-80p m-auto"
                  alt="ace energy logo"
                  src={acenergyLogo}
                />
              </picture>
            </div>
            <div class="logo-container lg:w-1/4">
              <picture>
                <source srcset={metropacificiloiloLogowebp} type="image/webp" />
                <img
                  class="w-full m-auto"
                  alt="metro pacific iloilo logo"
                  src={metropacificiloiloLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={ap4Logowebp} type="image/webp" />
                <img class="w-80p m-auto" alt="apmc logo" src={ap4Logo} />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={globalshapersLogowebp} type="image/webp" />
                <img
                  class="w-full m-auto"
                  alt="globalshapers logo"
                  src={globalshapersLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={hondaLogowebp} type="image/webp" />
                <img class="w-full m-auto" alt="honda logo" src={hondaLogo} />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={fordLogowebp} type="image/webp" />
                <img class="w-full m-auto" alt="ford logo" src={fordLogo} />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={metroiloiloLogowebp} type="image/webp" />
                <img
                  class="w-full m-auto"
                  alt="metro iloilo logo"
                  src={metroiloiloLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={marriotLogowebp} type="image/webp" />
                <img
                  class="w-full m-auto"
                  alt="marriot iloilo logo"
                  src={marriotLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={doubleteamLogowebp} type="image/webp" />
                <img
                  class="w-60p m-auto"
                  alt="doubleteam logo"
                  src={doubleteamLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={ibcLogowebp} type="image/webp" />
                <img
                  class="w-80p m-auto"
                  alt="iloilo business club logo"
                  src={ibcLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={iurLogowebp} type="image/webp" />
                <img
                  class="w-60p m-auto"
                  alt="iloilo united royals logo"
                  src={iurLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={isatLogowebp} type="image/webp" />
                <img
                  class="w-80p m-auto"
                  alt="isat university logo"
                  src={isatLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={damireshillsLogowebp} type="image/webp" />
                <img
                  class="m-auto"
                  alt="damires hills logo"
                  src={damireshillsLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={laylaLogowebp} type="image/webp" />
                <img class="w-60p m-auto" alt="layla logo" src={laylaLogo} />
              </picture>
            </div>
            <div class="logo-container lg:w-1/3">
              <picture>
                <source srcset={ferjbironLogowebp} type="image/webp" />
                <img
                  class="w-full m-auto"
                  alt="ferj biron banner"
                  src={ferjbironLogo}
                />
              </picture>
            </div>
            <div class="logo-container">
              <picture>
                <source srcset={jamjamLogowebp} type="image/webp" />
                <img
                  class="w-full m-auto"
                  alt="jamjam banner"
                  src={jamjamLogo}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <div
        class="relative bg-cover bg-bottom bg-black"
        style={{ backgroundImage: `url(${secondBGwebp})` }}
      >
        <section id="team">
          <div class="relative flex flex-col h-auto overflow-hidden bg-cover items-center justify-center">
            <Moon2 />
            <div class="text-prometheus-gold font-visby text-base sm:text-base md:text-2xl 2xl:text-4xl text-center mt-10 lg:mt-20">
              <p class="max-sm:inline">
                <span class="font-demi-bold">Prometheus</span> is founded on the
                science of marketing{" "}
              </p>
              <p class="max-sm:inline">
                coming from multiple disciplines, focused on one{" "}
              </p>
              <p class="max-sm:inline">singular goal of promoting your brand</p>
            </div>
            <h2 class="text-lg md:text-3xl 2xl:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray text-center mt-10 mb-10">
              MEET OUR STORYTELLERS
            </h2>
            <motion.div class="z-10 flex flex-wrap flex-shrink justify-center md:w-10/12 ">
              <motion.div class="team-items z-50">
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  variants={teamMotion}
                >
                  <picture>
                    <source srcset={jonaswebp} type="image/webp" />
                    <img class="team-img" alt="Jonas Tavarro" src={jonas} />
                  </picture>
                  <motion.div
                    variants={teamDescMotion}
                    class="team-description left-full"
                  >
                    <p>
                      As the Post-Production Director, Jonas works with
                      computer-generated imagery (CGI) to make otherwise
                      impossible scenes very much possible.{" "}
                    </p>
                    <p>
                      With today’s technology, imaginative art isn’t limited to
                      the camera or a paintbrush.{" "}
                    </p>
                    <p>
                      A computer screen, in talented hands, can create art just
                      as well.
                    </p>
                  </motion.div>
                </motion.div>
                <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                  JONAS TAVARRO
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                  Executive
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-lef">
                  Post-Production Director
                </p>
              </motion.div>

              <div class="team-items z-40">
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  variants={teamMotion}
                >
                  <picture>
                    <source srcset={tinwebp} type="image/webp" />
                    <img class="team-img" alt="Christine Jaylo" src={tin} />
                  </picture>
                  <motion.div
                    variants={teamDescMotion}
                    class="team-description left-full"
                  >
                    <p>
                      To lead a team of creatives requires not just peak talent
                      but also top-tier taste.{" "}
                    </p>
                    <p>
                      “Tintin” commands the team’s creative flow and directs
                      projects as the Executive Creative Director.
                    </p>
                    <p>
                      Her job is making sure that a singular message is sent
                      across multiple renditions of varied art forms.
                    </p>
                  </motion.div>
                </motion.div>
                <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                  CHRISTINE JAYLO
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                  Executive
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-left">
                  Creative Director
                </p>
              </div>

              <div class="team-items z-30">
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  variants={teamMotion}
                >
                  <picture>
                    <source srcset={lcidwebp} type="image/webp" />
                    <img class="team-img" alt="Lcid Fernandez" src={lcid} />
                  </picture>
                  <motion.div
                    variants={teamDescMotion}
                    class="team-description left-full"
                  >
                    <p>
                      Lcid founded Prometheus on a passion for imagination and
                      telling stories.
                    </p>
                    <p>
                      He envisioned a team of artists and strategists with the
                      singular goal of committing their talents to marketing.
                    </p>
                    <p>
                      The CEO understands that the best stories are told in an
                      exciting, colorful, and captivating manner.{" "}
                    </p>
                    <p>
                      What goes for telling a story is the same that goes for
                      marketing a brand.
                    </p>
                  </motion.div>
                </motion.div>
                <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                  LCID FERNANDEZ
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                  CEO
                </p>
              </div>

              <motion.div class="team-items z-60" whileHover={{ zIndex: 60 }}>
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  variants={teamMotion}
                >
                  <picture>
                    <source srcset={ginowebp} type="image/webp" />
                    <img class="team-img" alt="Gino Fanega" src={gino} />
                  </picture>
                  <motion.div
                    variants={teamDescMotion}
                    class="team-description right-full"
                  >
                    <p>
                      Content Production is all about perspective, lighting, and
                      the techniques that come with it.{" "}
                    </p>
                    <p>
                      The man behind the camera is Gino and he’s responsible for
                      all visual direction and production.{" "}
                    </p>
                    <p>
                      The Executive Content Producer plans out the storyboard,
                      sets the scene, points the camera, and does the magic.{" "}
                    </p>
                  </motion.div>
                </motion.div>
                <p class=" text-xl 2xl:text-4xl  font-visby font-bold text-left mt-5">
                  GINO FANEGA
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                  Executive
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-left">
                  Content Producer
                </p>
              </motion.div>

              <motion.div class="team-items" whileHover={{ zIndex: 50 }}>
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  variants={teamMotion}
                >
                  <picture>
                    <source srcset={reywebp} type="image/webp" />
                    <img class="team-img" alt="Rey Palmares" src={rey} />
                  </picture>
                  <motion.div
                    variants={teamDescMotion}
                    class="team-description right-full"
                  >
                    <p>
                      The Senior Copywriter takes charge in the text and verbal
                      content in all production - like the one you’re reading
                      now.{" "}
                    </p>
                    <p>
                      Rey is responsible for presenting the ideas in word format
                      and conveying the message outside of the visuals by the
                      other creatives.{" "}
                    </p>
                  </motion.div>
                </motion.div>
                <p class=" text-xl 2xl:text-4xl  font-visby font-bold mt-5">
                  REY PALMARES
                </p>
                <p class=" text-xl 2xl:text-3xl  font-visby text-left mt-5">
                  Senior Copywriter
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <picture>
          <source srcset={rock4webp} type="image/webp" />
          <img
            class="rellax absolute right-0 w-1/6 h-auto"
            alt="rock"
            data-rellax-speed="-1"
            src={rock4}
          />
        </picture>
        <section id="advisors">
          <div class="relative flex md:h-screen bg-cover place-items-center	items-center justify-center">
            <div class="w-3/4 md:h-3/6 max-md:block grid max-md:grid-cols-1 max-md:grid-rows-3 md:grid-cols-3 grid-flow-col max-md:mt-10 gap-10">
              <div class="text-white text-base lg:text-3xl xl:text-4xl 2xl:text-6xl font-visby text-center md:text-left tracking-wider mt-10 mb-10">
                <span>
                  We are backed by{" "}
                  <span class="font-demi-bold">
                    several decades of experience
                  </span>{" "}
                  in theory and practice.
                </span>
              </div>
              <motion.div>
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  variants={teamMotion}
                >
                  <picture>
                    <source srcset={lemuelwebp} type="image/webp" />
                    <img
                      alt="Lemuel Fernandez"
                      class="transition duration-500 border-gray-300 border-opacity-0 sm:hover:border-opacity-100 border-4 rounded-lg sm:hover:border-prometheus-gold w-full mh-600px object-cover block"
                      src={lemuel}
                    />
                  </picture>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1,
                      bounce: 0,
                      zIndex: -1,
                      type: "tween",
                    }}
                    variants={teamDescMotion}
                    class="team-description right-full w-full"
                  >
                    <p class="">
                      Mr. Fernandez has over thirty years’ experience in public
                      relations service working with corporations and public
                      servants all over the country.
                    </p>
                    <p class="">
                      Coupled with his time as a journalist, he knows the
                      intricacies of marketing by first-hand experience.
                    </p>
                  </motion.div>
                  <p class="text-white text-xl 2xl:text-4xl font-visby text-left max-sm:mb-5">
                    Lemuel Fernandez
                  </p>
                </motion.div>
              </motion.div>
              <motion.div>
                <motion.div
                  class="relative"
                  initial="rest"
                  whileHover="hover"
                  variants={teamMotion}
                >
                  <picture>
                    <source srcset={tessawebp} type="image/webp" />
                    <img
                      alt="Tessa Albaña"
                      class="transition duration-500 border-gray-300 border-opacity-0 sm:hover:border-opacity-100 border-4 rounded-lg sm:hover:border-prometheus-gold w-full mh-600px object-cover block"
                      src={tessa}
                    />
                  </picture>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1,
                      bounce: 0,
                      zIndex: -1,
                      type: "tween",
                    }}
                    variants={teamDescMotion}
                    class="absolute w-full p-4  text-prometheus-gold bg-black bg-cover border-prometheus-gold text-sm 2xl:text-xl font-visby text-center md:text-left bottom-10 right-full"
                  >
                    <p class="">
                      Ms. Albaña has taught generations of marketers as an
                      Assistant Professor at the University of the Philippines
                      Visayas.
                    </p>
                    <p class="">
                      As the go-to coach for marketing competitions, her teams
                      have won several national awards.
                    </p>
                  </motion.div>
                  <p class="text-white text-xl xl:text-2xl 2xl:text-4xl font-visby text-right">
                    Tessa Albaña
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <picture>
              <source srcset={rock5webp} type="image/webp" />
              <img
                class="rellax overflow-visible absolute left-5 -bottom-36 2xl:-bottom-60 w-3/12 h-auto"
                alt="floating rock5"
                data-rellax-speed="4"
                src={rock5}
              />
            </picture>
          </div>
        </section>

        {/* new contact start */}
        <section id="contact">
          <div class="max-w-screen-sm mx-auto p-5">
            <div class="text-center mb-16">
              <p class="mt-4 text-sm sm:text-xl leading-7 text-white font-regular uppercase">
                Contact Us and Get a Quote
              </p>
              <h2 class="z-10 text-3xl sm:text-4xl 2xl:text-6xl leading-normal font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray text-center">
                We're always ready for new stories
              </h2>
            </div>

            <form name="prometheuscontact" method="POST" netlify>
              <input type="hidden" name="form-name" value="prometheuscontact" />
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    name="firstname"
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Peter"
                  />
                  {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Weyland"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="********@*****.**"
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-visby mb-2"
                    for="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="10"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                  <div class="md:flex md:items-center">
                    <label class="block text-white font-bold">
                      <input
                        name="checked"
                        class="mr-2 leading-tight"
                        type="checkbox"
                      />
                      <span class="text-sm">Add me to your mailing list</span>
                    </label>
                  </div>
                  <button
                    class="shadow bg-prometheus-gold hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* new contact end */}
      </div>
    </main>
    {/* long bg end */}

    <div class="placeholder relative z-10 h-70px sm:h-100px"></div>

    {/* Footer Start */}
    <footer class="fixed bottom-0 w-full z-20">
      <div
        class="relative content-center items-center sm:flex justify-between flex-row-reverse bg-cover h-70px sm:h-100px bg-bottom overflow-hidden"
        style={{ backgroundImage: `url(${footerwebp})` }}
      >
        <picture>
          <source srcset={prometheusLogowebp} type="image/webp" />
          <img
            class="sm:mx-5 m-auto md:mx-10 lg:mx-20 h-8 sm:h-12 md:h-16 lg:h-20 2xl:max-h-20 max-sm:mt-1"
            alt="Prometheus Footer Logo"
            src={prometheusLogo}
          />
        </picture>
        <div class="text-center sm:text-left sm:text-sm text-xs md:text-base 2xl:text-xl font-visby text-white sm:ml-10">
          <p>Copyright © 2022 Prometheus, Inc. All rights reserved</p>
          <p>Daily Guardian Center, Guzman Jesena St., Mandurriao, Iloilo City, 5000 Iloilo, Philippines</p>
        </div>
      </div>
    </footer>
    {/* Footer End */}
  </React.StrictMode>,
  document.getElementById("root")
);
