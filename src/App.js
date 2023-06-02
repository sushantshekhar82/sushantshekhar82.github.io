import {
  Box,
  Button,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { useToast } from "@chakra-ui/react";
import React from "react";
import axios from "axios"
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import sushant from "./Sushant_Shekhar_Resume.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  const toast = useToast();
  const [click, setClick] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [load,setload]=useState(false)
  function downloadFile() {
    let link = document.createElement("a");
    link.download = "Sushant_Shekhar_Resume.pdf";
    link.href = sushant;

    link.click();

    link.remove();
  }
  function resume() {
    window.open(
      "https://drive.google.com/file/d/1xMMFWpietjNymM1NeB3wafLPa4iBI9q3/view",
      "_blank"
    );
  }

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const handleuser=()=>{
    {
      if (name !== "" && email !== "" && message !== "") {
        let obj={
          name,
          email,
          message
        }
      axios.post("https://aggressive-ring-cow.cyclic.app/",obj).then(function (response) {
       
      toast({
        title: "Wait...",

        status: "success",
        duration: 3000,
        isClosable: true,
      });
        toast({
          title: "Thank you , I will connect soon",

          status: "success",
          duration: 5000,
          isClosable: true,
        });
       
       
      })
      .catch(function (error) {
        toast({
          title: "Error Try after some time",

          status: "error",
          duration: 5000,
          isClosable: true,
        });
       
      })
     
       
      } else {
        toast({
          title: "Enter all Fields",

          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <div className="App">
      {/* Navbar  */}

      <div className="Nav_Container" id="nav-menu">
        <div className="wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/105901300?v=4"
            style={{ borderRadius: "50%" }}
            alt="logo"
            width="50px"
            height="50px"
          />
        </div>

        <div>
          <ul
            id="navitems"
            className={click ? "#navitems" : "#navitems active"}
           
          >
            <li>
              <a href="#home" className="nav-link home"  onClick={() => setClick(!click)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link about"  onClick={() => setClick(!click)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link skills"  onClick={() => setClick(!click)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link projects"  onClick={() => setClick(!click)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link contact"  onClick={() => setClick(!click)}>
                Contact
              </a>
            </li>
            <li>
              <button
                id="resume-button-1"
                class="button-21"
                style={{
                  display: "flex",
                  gap: 5,
                  height: "40px",

                  fontWeight: "bold",
                }}
                onClick={resume}
              >
                <a
                  id="resume-link-1"
                  href={sushant}
                  download="Sushant_Shekhar_Resume.pdf"
                  target="_blank"
                  style={{
                    display: "flex",
                    gap: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Resume <FaCloudDownloadAlt color="black" size={25} />
                </a>
              </button>
              {/* <div >
                <button
                  className="button-21 nav-link resume"
                  style={{ display: "flex", gap: 5 }}
                  id="resume-button-1"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1xMMFWpietjNymM1NeB3wafLPa4iBI9q3/view",
                      "_blank"
                    );
                    downloadFile();
                  }}
                >
                  Resume <FaCloudDownloadAlt color="black" size={25} />
                </button>
              </div> */}
            </li>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <li>
                <a
                  href="https://github.com/sushantshekhar82"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sushantshekhar8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
            </span>
          </ul>
        </div>
        <div id="mobile">
          <i
            className={click ? "fas fa-bars" : "fas fa-times"}
            onClick={() => setClick(!click)}
          ></i>
        </div>
      </div>

      <div id="home" className="intro">
        <div>
          <h4>Hi there 👋🏽, i'm</h4>
          <h1 className="name" id="user-detail-name">
            Kumar Sushant Shekhar
          </h1>
          <h2>
            <span>
              {" "}
              <Typewriter
                words={[
                  "Full Stack Web Developer",
                  "Always ready to learn",
                  "FrontEnd",
                  "Competitive programmer",
                  "BackEnd",
                ]}
                loop={500}
                cursor
                cursorStyle={"|"}
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
          </h2>

          <button
            id="resume-button-2"
            class="button-21"
            style={{
              display: "flex",
              gap: 5,
              height: "50px",

              fontWeight: "bold",
            }}
            onClick={resume}
          >
            <a
              id="resume-link-2"
              href={sushant}
              download="Sushant_Shekhar_Resume.pdf"
              target="_blank"
              style={{
                display: "flex",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Resume <FaCloudDownloadAlt color="black" size={25} />
            </a>
          </button>
        </div>
      </div>

      <div id="about" className="about section" data-aos="fade-up">
        <h1>ABOUT ME</h1>

        <div className="aboutgrid">
          <div>
            <div className="imagebox">
              <img
                src="./profileimg.png"
                alt="sushant shekhar"
                class="home-img"
              />
            </div>

            {/* <img src="./profileimg2.png" alt="sushant shekhar" class="home-img" /> */}
          </div>
          <div>
            <div className="box">
              <h2 id="user-detail-intro">
                An Innovative, solution-driven web developer with
                proficiency in MERN stack and capable of writing
                production-ready code using HTML, CSS, and JavaScript. Proven
                experience in developing multiple web-based applications with
                good collaboration skills and can easily be adept in the work
                environment.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="skill skills-card" data-aos="flip-left">
        <h1 style={{ marginTop: "5px" }}>SKILLS</h1>

        <Flex justifyContent={"center"} alignItems={"center"}>
          <Tabs variant="soft-rounded" colorScheme="green" fontWeight={"bold"}>
            <TabList fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
              <Tab fontWeight={"bold"}>All Skills</Tab>
              {/* <Tab fontWeight={'bold'}>FrontEnd</Tab>
    <Tab fontWeight={'bold'}>BackEnd</Tab>
    <Tab fontWeight={'bold'}>Tools</Tab> */}
            </TabList>
            <TabPanels>
              {/* All skills section */}
              <TabPanel>
                <Box
                  display={"grid"}
                  gridTemplateColumns={{
                    base: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(5,1fr)",
                  }}
                  gap="10px"
                >
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <g fill="#61DAFB">
                          <circle cx="64" cy="64" r="11.4" />
                          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                        </g>
                      </svg>
                    </div>
                    <div className="skills-card-name">React</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#439934"
                          d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#45A538"
                          d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#46A037"
                          d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#409433"
                          d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#4FAA41"
                          d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#4AA73C"
                          d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#57AE47"
                          d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#60B24F"
                          d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#A9AA88"
                          d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#B6B598"
                          d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#C2C1A7"
                          d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#CECDB7"
                          d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#DBDAC7"
                          d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#EBE9DC"
                          d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#CECDB7"
                          d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#4FAA41"
                          d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
                        />
                      </svg>
                    </div>
                    <div className="skills-card-name">MongoDb</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <Img
                        src="https://iconape.com/wp-content/files/cf/353046/svg/next-js-seeklogo.com.svg"
                        p={"3px"}
                        alt="jest"
                        className="skills-card-img"
                      />
                    </div>
                    <div className="skills-card-name"> NextJs</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#83CD29"
                          d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                        />
                      </svg>{" "}
                    </div>
                    <div className="skills-card-name">NodeJs</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path fill="none" d="M0 0h128v128H0z" />
                        <path
                          d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                          fill="#764abc"
                        />
                      </svg>{" "}
                    </div>
                    <div className="skills-card-name">Redux</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#F0DB4F"
                          d="M1.408 1.408h125.184v125.185H1.408z"
                        />
                        <path
                          fill="#323330"
                          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                        />
                      </svg>{" "}
                    </div>
                    <div className="skills-card-name">JavaScript</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="skills-card-img"
                      >
                        <path
                          fill="#1572B6"
                          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                        />
                        <path
                          fill="#33A9DC"
                          d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                        />
                        <path
                          fill="#fff"
                          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                        />
                        <path
                          fill="#fff"
                          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                        />
                      </svg>
                    </div>
                    <div className="skills-card-name">Css 3</div>
                  </div>

                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="skills-card-img"
                      >
                        <path
                          fill="#E44D26"
                          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                        />
                        <path
                          fill="#F16529"
                          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                        />
                        <path
                          fill="#EBEBEB"
                          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                        />
                        <path
                          fill="#fff"
                          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                        />
                      </svg>
                    </div>
                    <div className="skills-card-name">HTML5</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#366a96"/><stop offset="1" stop-color="#3679b0"/></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc836"/><stop offset="1" stop-color="#ffe873"/></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)"/><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)"/><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"/></g></svg>
                    </div>
                    <div className="skills-card-name">Python</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <Img
                        src="./Typescript.png"
                        alt="Typescript"
                        className="skills-card-img"
                      />
                    </div>
                    <div className="skills-card-name">Typescript</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <svg
                        fill="#000000"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="skills-card-img"
                      >
                        <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
                      </svg>
                    </div>
                    <div className="skills-card-name">Vercel</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <Img
                        src="https://www.svgrepo.com/show/374167/vite.svg"
                        alt="vite"
                        className="skills-card-img"
                      />
                    </div>
                    <div className="skills-card-name">Vite</div>
                  </div>

                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <Img
                        src="./chakra.png"
                        alt="chakra"
                        className="skills-card-img"
                      />
                    </div>
                    <div className="skills-card-name">Chakra UI</div>
                  </div>

                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="skills-card-img"
                      >
                        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
                      </svg>{" "}
                    </div>
                    <div className="skills-card-name">ExpressJs</div>
                  </div>

                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div>
                      <Img
                        src="./cypress.webp"
                        alt="cypress"
                        className="skills-card-img"
                      />
                    </div>
                    <div className="skills-card-name">Cypress</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#cb3837"
                          d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
                        />
                      </svg>
                    </div>
                    <div className="skills-card-name">npm</div>
                  </div>

                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#F34F29"
                          d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                        />
                      </svg>
                    </div>
                    <div className="skills-card-name">Git</div>
                  </div>
                  <div className="skillsbox skills-card" data-aos="fade-up">
                    <div className="skills-card-img" style={{ padding: "3px" }}>
                      <svg
                        viewBox="-11.9 -2 1003.9 995.6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
                          fill="#2489ca"
                        />
                        <path
                          d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
                          fill="#1070b3"
                        />
                        <path
                          d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
                          fill="#0877b9"
                        />
                        <path
                          d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
                          fill="#3c99d4"
                        />
                      </svg>
                    </div>
                    <div className="skills-card-name">Visual Studio</div>
                  </div>
                </Box>
              </TabPanel>
              {/* FrontEnd */}
              {/* <TabPanel>
    <Box display={'grid'} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"} } gap="10px" >
        
        <div className="skillsbox" data-aos="flip-up">
          <div class="skills-card-img">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <g fill="#61DAFB">
                <circle cx="64" cy="64" r="11.4" />
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
              </g>
            </svg>
          </div>
          <div class="skills-card-name">React</div>
        </div>
        <div className="skillsbox" data-aos="flip-up">
          <div class="skills-card-img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#83CD29"
                d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
              />
            </svg>{" "}
          </div>
          <div class="skills-card-name">NodeJs</div>
        </div>
        <div className="skillsbox" data-aos="fade-down">
          <div class="skills-card-img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path fill="none" d="M0 0h128v128H0z" />
              <path
                d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                fill="#764abc"
              />
            </svg>{" "}
          </div>
          <div class="skills-card-name">Redux</div>
        </div>
        <div className="skillsbox" data-aos="fade-down">
          <div  class="skills-card-img">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              />
            </svg>{" "}
          </div>
          <div class="skills-card-name">JavaScript</div>
        </div>
        <div className="skillsbox" data-aos="fade-down">
          <div  class="skills-card-img">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#1572B6"
                d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
              />
              <path
                fill="#33A9DC"
                d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
              />
              <path
                fill="#fff"
                d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
              />
              <path
                fill="#EBEBEB"
                d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
              />
              <path
                fill="#fff"
                d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
              />
              <path
                fill="#EBEBEB"
                d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
              />
            </svg>
          </div>
          <div class="skills-card-name">Css 3</div>
        </div>

        <div className="skillsbox" data-aos="fade-down">
          <div class="skills-card-img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#E44D26"
                d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
              />
              <path
                fill="#F16529"
                d="M64 116.8l36.378-10.086 8.559-95.878H64z"
              />
              <path
                fill="#EBEBEB"
                d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
              />
              <path
                fill="#fff"
                d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
              />
            </svg>
          </div>
          <div class="skills-card-name">HTML5</div>
        </div>
        <div className="skillsbox" data-aos="fade-down">
          <div class="skills-card-img">
            <Img src="./Typescript.png" alt="Typescript" />
          </div>
          <div class="skills-card-name">Typescript</div>
        </div>
        <div className="skillsbox" data-aos="fade-down">
          <div>
          <svg fill="#000000"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M256,48,496,464H16Z"/></svg>
          </div>
          <div>Vercel</div>
        </div>
        <div className="skillsbox" data-aos="fade-down">
          <div>
          <svg  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><title>file_type_vite</title><path d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z" fill="url(#paint0_linear)"/><path d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z" fill="url(#paint1_linear)"/><defs id="defs50"><linearGradient id="paint0_linear" x1="6.0002" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stop-color="#41D1FF" id="stop38"/><stop offset="1" stop-color="#BD34FE" id="stop40"/></linearGradient><linearGradient id="paint1_linear" x1="194.651" y1="8.8182" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stop-color="#FFEA83" id="stop43"/><stop offset=".0833" stop-color="#FFDD35" id="stop45"/><stop offset="1" stop-color="#FFA800" id="stop47"/></linearGradient></defs></svg>
          </div>
          <div>Vite</div>
        </div>
       
        <div className="skillsbox" data-aos="fade-up">
          <div>
            <Img src="./chakra.png" alt="chakra" />
          </div>
          <div>Chakra UI</div>
        </div>
        <div className="skillsbox" data-aos="fade-up">
          <div>
          <Img src="https://iconape.com/wp-content/files/cf/353046/svg/next-js-seeklogo.com.svg" p={'3px'}  alt='jest'/>
           </div>
          <div>NextJs</div>
        </div>
       
      </Box>
    </TabPanel> */}
              {/*BackEnd */}
              {/* <TabPanel>
    <Box display={'grid'} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"} } gap="10px" >
        
     <div className="skillsbox" data-aos="fade-down-left">
          <div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"/></svg>
          </div>
          <div>MongoDb</div>
        </div>
        <div className="skillsbox" data-aos="fade-down-left">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>   </div>
          <div>ExpressJs</div>
        </div>
        <div className="skillsbox" data-aos="fade-down-left">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>
          </div>
          <div>NodeJs</div>
        </div>
        <div className="skillsbox" data-aos="fade-down-left">
          <div>
            <Img src="./cypress.webp" alt="cypress"/>
          </div>
          <div>Cypress</div>
        </div>
       
        
       
      </Box>
    </TabPanel> */}
              {/* Tools */}
              {/* <TabPanel>
      <Box display={'grid'} gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"} } gap="10px" >
        
        
        <div className="skillsbox" data-aos="fade-up-left">
          <div  class="skills-card-img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#cb3837"
                d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
              />
            </svg>
          </div>
          <div class="skills-card-name">npm</div>
        </div>
      
        <div className="skillsbox" data-aos="fade-up-left">
          <div class="skills-card-img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#F34F29"
                d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
              />
            </svg>
          </div>
          <div class="skills-card-name">Git</div>
        </div>
        <div className="skillsbox" data-aos="flip-up">
          <div class="skills-card-img" style={{padding:"3px"}}>
          <svg  viewBox="-11.9 -2 1003.9 995.6"  xmlns="http://www.w3.org/2000/svg"><path d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z" fill="#2489ca"/><path d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z" fill="#1070b3"/><path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z" fill="#0877b9"/><path d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z" fill="#3c99d4"/></svg>
          </div>
          <div class="skills-card-name">Visual Studio</div>
        </div>
        <div className="skillsbox" data-aos="fade-up-left">
          <div>
            <Img src="https://iconape.com/wp-content/png_logo_vector/jest-logo.png" p={"5px"} alt="jest"/>
          </div>
          <div>Jest</div>
        </div>
      </Box>  
    </TabPanel> */}
            </TabPanels>
          </Tabs>
        </Flex>
        {/* <div className="skillsimg">
        
          <div className="skillsbox">
            <div class="skills-card-img">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4" />
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                </g>
              </svg>
            </div>
            <div class="skills-card-name">React</div>
          </div>
          <div className="skillsbox">
            <div class="skills-card-img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  fill="#83CD29"
                  d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                />
              </svg>{" "}
            </div>
            <div class="skills-card-name">NodeJs</div>
          </div>
          <div className="skillsbox">
            <div class="skills-card-img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path fill="none" d="M0 0h128v128H0z" />
                <path
                  d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                  fill="#764abc"
                />
              </svg>{" "}
            </div>
            <div class="skills-card-name">Redux</div>
          </div>
          <div className="skillsbox">
            <div  class="skills-card-img">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                />
              </svg>{" "}
            </div>
            <div class="skills-card-name">Javascript</div>
          </div>
          <div className="skillsbox">
            <div  class="skills-card-img">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                />
                <path
                  fill="#33A9DC"
                  d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                />
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                />
                <path
                  fill="#fff"
                  d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                />
              </svg>
            </div>
            <div class="skills-card-name">Css 3</div>
          </div>

          <div className="skillsbox">
            <div class="skills-card-img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                />
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                />
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                />
              </svg>
            </div>
            <div class="skills-card-name">HTML5</div>
          </div>
          <div className="skillsbox">
            <div class="skills-card-img">
              <Img src="./Typescript.png" alt="Typescript" />
            </div>
            <div class="skills-card-name">Typescript</div>
          </div>
          <div className="skillsbox">
            <div  class="skills-card-img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  fill="#cb3837"
                  d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
                />
              </svg>
            </div>
            <div class="skills-card-name">npm</div>
          </div>
          <div className="skillsbox">
            <div>
              <Img src="./chakra.png" alt="Typescript" />
            </div>
            <div>Chakra UI</div>
          </div>
          <div className="skillsbox">
            <div class="skills-card-img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  fill="#F34F29"
                  d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
                />
              </svg>
            </div>
            <div class="skills-card-name">Git</div>
          </div>
        </div> */}
      </div>

      <div id="projects" className="project" data-aos="flip-right">
        <h1>PROJECTS</h1>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
          }}
          margin={"auto"}
          padding="10px"
          gap="10px"
        >
          <div className="projectbox project-card" data-aos="zoom-in-up">
            <div>
              <Img
                src="./myntraclone.jpeg"
                alt="myntraclone"
                borderRadius={"10px"}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              />
            </div>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Myntra Clone</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Img
                    src="./myntraclone.jpeg"
                    alt="myntraclone"
                    borderRadius={"10px"}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <div>
              <center>
                <h1
                  style={{ fontSize: "30px", lineHeight: "25px" }}
                  class="project-title"
                >
                  Myntra Clone
                </h1>
              </center>
              <h2
                style={{
                  fontSize: "18px",
                  lineHeight: "25px",
                  marginTop: "10px",
                }}
                class="project-description"
              >
                Myntra is a famous branded cloths Ecommerce website which gives
                you wide varieties of fashionable and branded clothes and many
                more.Here you can shop any items very easily.
              </h2>
              <span style={{ marginTop: "5px" }} class="project-tech-stack">
                <button class="button-21">React</button>
                <button class="button-21">Redux</button>
                <button class="button-21">MongoDb</button>
                <button class="button-21">ExpressJs</button>
                <button class="button-21">NodeJs</button>
                <button class="button-21">Redux thunk</button>
                <button class="button-21">Javascript</button>
                <button class="button-21">Jsonwebtoken</button>
                <button class="button-21">Bcrypt</button>
                <button class="button-21">Bootstrap 4</button>
                <button class="button-21">Chakra UI</button>
              </span>
              <span className="github project-github-link">
                <a
                  href="https://github.com/sushantshekhar82/Myntra.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="Black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://myntracloneproject.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye project-deployed-link "
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="projectbox project-card" data-aos="zoom-in-up">
            <div>
              <Img
                src="https://user-images.githubusercontent.com/105901300/223351210-861d3165-fe3a-407e-a61e-0c277d265a84.png"
                alt="Productify.com"
                borderRadius={"10px"}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              />
            </div>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Productify.com</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Img
                    src="https://user-images.githubusercontent.com/105901300/223351210-861d3165-fe3a-407e-a61e-0c277d265a84.png"
                    alt="Productify"
                    borderRadius={"10px"}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <div>
              <center>
                <h1
                  style={{
                    fontSize: "30px",
                    lineHeight: "20px",
                    marginTop: "20px",
                  }}
                  class="project-title"
                >
                  Productify.com
                </h1>
              </center>
              <h2
                style={{
                  fontSize: "18px",
                  lineHeight: "25px",
                  marginTop: "10px",
                }}
                class="project-description"
              >
                Productify.com is an e-commerce website where you can buy any
                types of item like electronics, fashion, toys, sports etc. . we
                just ensure that users experience doesn't affect so that we made
                this website for Mobile , tablet , Desktop view (Clone of e-bay)
              </h2>
              <span style={{ marginTop: "5px" }} class="project-tech-stack">
                <button class="button-21">React</button>
                <button class="button-21">Redux</button>
                <button class="button-21">Javascript</button>
                <button class="button-21">Json Server</button>
                <button class="button-21">Bootstrap 4</button>
                <button class="button-21">Render</button>
                <button class="button-21">Chakra UI</button>
              </span>
              <span className="github project-github-link">
                <a
                  href="https://github.com/sushantshekhar82/productify.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="Black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://productify.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye project-deployed-link "
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          
          <div className="projectbox project-card" data-aos="zoom-in-up">
            <div>
              <Img
                src="https://github.com/akhtarfaizan20/Bindass/raw/master/public/readme/home1.png?raw=true"
                alt="Bindass"
                borderRadius={"10px"}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              />
            </div>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Bindass.com</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Img
                    src="https://github.com/akhtarfaizan20/Bindass/raw/master/public/readme/home1.png?raw=true"
                    alt="bindass"
                    borderRadius={"10px"}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <div>
              <center>
                <h1
                  style={{ fontSize: "30px", lineHeight: "25px" }}
                  class="project-title"
                >
                  Bindass.com
                </h1>
              </center>
              <h2
                style={{
                  fontSize: "18px",
                  lineHeight: "25px",
                  marginTop: "10px",
                }}
                class="project-description"
              >
                Bindass is an E-commerce platform which has a complete user flow
                from landing page to the order page. It has an admin panel where
                the admin can perform CRUD operations.
              </h2>
              <span style={{ marginTop: "5px" }} class="project-tech-stack">
                <button class="button-21">React</button>
                <button class="button-21">Redux</button>
                <button class="button-21">Javascript</button>
                <button class="button-21">Json Server</button>
                <button class="button-21">Render</button>
                <button class="button-21">Chakra UI</button>
              </span>
              <span className="github project-github-link">
                <a
                  href="https://github.com/sushantshekhar82/Bindass"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="Black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://bindass-bewakoof.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye project-deployed-link "
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="projectbox project-card" data-aos="zoom-in-down">
            <div>
              <img
                src="./bluemercury.jpeg"
                alt="blue mercury clone"
                borderRadius={"10px"}
              />
            </div>

            <div>
              <center>
                <h1
                  style={{ fontSize: "30px", lineHeight: "25px" }}
                  class="project-title"
                >
                  Bluemercury Clone
                </h1>
              </center>
              <h2
                style={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  marginTop: "10px",
                }}
                class="project-description"
              >
                Bluemercury is a skincare product Ecommerce website which gives
                you wide varieties of branded skincare , makeup care and many
                more products.
              </h2>
              <span style={{ marginTop: "5px" }} class="project-tech-stack">
                <button class="button-21">Javascript</button>
                <button class="button-21">Json Server</button>
                <button class="button-21">API</button>
                <button class="button-21">Css 3</button>
                <button class="button-21">HTML5</button>
                <button class="button-21">Render</button>
              </span>
              <span className="github project-github-link">
                <a
                  href="https://github.com/sushantshekhar82/Bluemercury.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="Black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://bluemercury-project.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye project-deployed-link "
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="projectbox project-card" data-aos="zoom-in-left">
            <div>
              <Img
                src="./wrike.png"
                alt="wrike clone"
                borderRadius={"10px"}
                width="100%"
                height="auto"
              />
            </div>

            <div>
              <center>
                <h1
                  style={{ fontSize: "30px", lineHeight: "25px" }}
                  class="project-title"
                >
                  Wrike.com
                </h1>
              </center>
              <h2
                style={{
                  fontSize: "18px",
                  lineHeight: "25px",
                  marginTop: "10px",
                }}
                class="project-description"
              >
                Wrike is the most powerful work management software at your
                fingertips. It provides multiple features to manage your work
                and complete in fixed time span by using this web based
                software.
              </h2>
              <span style={{ marginTop: "5px" }} class="project-tech-stack">
                <button class="button-21">React</button>
                <button class="button-21">Javascript</button>
                <button class="button-21">Json Server</button>
                <button class="button-21">Bootstrap 4</button>
                <button class="button-21">Render</button>
                <button class="button-21">Chakra UI</button>
              </span>
              <span className="github project-github-link">
                <a
                  href="https://github.com/sushantshekhar82/Wrike.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="Black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://wrike-project.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye project-deployed-link "
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="projectbox project-card" data-aos="zoom-in-right">
            <div>
              <Img
                src="./jefit.png"
                alt="Jefit clone"
                borderRadius={"10px"}
                width="100%"
                height="auto"
              />
            </div>

            <div>
              <center>
                <h1
                  style={{ fontSize: "30px", lineHeight: "25px" }}
                  class="project-title"
                >
                  Jefit.com
                </h1>
              </center>
              <h2
                style={{
                  fontSize: "18px",
                  lineHeight: "25px",
                  marginTop: "10px",
                }}
                class="project-description"
              >
                Jefit is an American fitness gym website. This website provides
                you all the exercise tips and direct connect to the coach for
                better mentor.
              </h2>
              <span style={{ marginTop: "5px" }} class="project-tech-stack">
                <button class="button-21">Javacript</button>
                <button class="button-21">HTML5</button>
                <button class="button-21">CSS3</button>
              </span>
              <span className="github project-github-link">
                <a
                  href="https://github.com/sushantshekhar82/Jefit.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="Black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://jefit-com.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye project-deployed-link "
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </Box>
      </div>

      <div
        id="calender"
        className="calender react-activity-calendar"
        data-aos="fade-down-right"
      >
        <h1>CALENDER</h1>
        <center>
          <img
            src="https://ghchart.rshah.org/sushantshekhar82"
            alt="sushantshekhar82"
            width="100%"
            height="500px"
            style={{ margin: "5px" }}
          />
        </center>

        <center style={{ marginTop: "5px", marginBottom: "10px" }}>
          <a href="https://github.com/ryo-ma/github-profile-trophy">
            <img
              src="https://github-profile-trophy.vercel.app/?username=sushantshekhar82"
              alt="sushantshekhar82"
              width="90%"
            />
          </a>
        </center>

        <center>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="stats"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=sushantshekhar82&show_icons=true"
              alt="sushantshekhar82"
              id="github-stats-card"
            />
            <Img
              className="stats"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=sushantshekhar82&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
              alt="sushantshekhar82"
              id="github-streak-stats"
            />
          </div>
        </center>
        <center>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <img
              src="https://github-stats-alpha.vercel.app/api?username=sushantshekhar82&cc=2e3440&tc=fff&ic=fff&bc=gray"
              alt="sushantshekhar82"
            />

            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=sushantshekhar82&theme=nord_dark"
              alt="sushantshekhar82"
              id="github-top-langs"
            />
          </div>
        </center>
      </div>
      <center className="gradient">
        HAVE A PROJECT? OR JUST LOOKING TO HIRE?
        <span style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <a
            href="https://github.com/sushantshekhar82"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="Black"
              viewBox="0 0 24 24"
              id="contact-github"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sushantshekhar8/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="5 0"
              fill="Black"
              viewBox="0 0 24 24"
              id="contact-linkedin"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>{" "}
        </span>
      </center>

      <div id="contact" className="contact1" data-aos="flip-left">
        <div className="hideform">
          <Img
            src="./contact.gif"
            width="500px"
            height="auto"
            alt="contact_form_gif_image"
          />
        </div>
        <div className="form">
          <Text>Full Name</Text>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
          <Text>Email</Text>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <Text>Leave Your Message here</Text>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave your message here"
          ></textarea>
          <br />
          <button
            onClick={handleuser}
            class="button-21"
          >
         Submit
          </button>
        </div>
      </div>
      <span className="contactdetail">
        <a href="tel:8298937625">
          <div className="contactbox">
            <button class="button-22" id="contact-phone">
              <FiPhoneCall
                style={{ borderRadius: "5px", margin: "auto" }}
                size={"20px"}
              />
              <Text
                bgGradient="linear(to-l,black, black)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
              >
                +918298937625{" "}
              </Text>
            </button>
          </div>
        </a>
        <a
          href="mailto:sushant.shekhar151997@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contactbox">
            <button class="button-22" id="contact-email">
              <MdEmail
                style={{ borderRadius: "5px", margin: "auto" }}
                size={"20px"}
              />
              <Text
                bgGradient="linear(to-l,black, black)"
                bgClip="text"
                fontSize="1xl"
                fontWeight="extrabold"
              >
                sushant.shekhar151997@gmail.com
              </Text>
            </button>
          </div>
        </a>
        <a
          href="https://wa.me/8298937625?text=Hi%20this%20is%20sushant%20shekhar%2C%20Leave%20your%20message"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contactbox">
            <button class="button-22">
              <IoLogoWhatsapp
                style={{ borderRadius: "5px", margin: "auto" }}
                size={"20px"}
              />

              <Text
                bgGradient="linear(to-l,black, black)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
              >
                WhatApp Me
              </Text>
            </button>
          </div>
        </a>
      </span>

      <div>
        <div className="bottom">
          Designed and Developed by Sushant Shekhar,All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
