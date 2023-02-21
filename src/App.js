import { Button, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { useToast } from "@chakra-ui/react";

import { IoLogoWhatsapp} from "react-icons/io";
import { MdEmail} from "react-icons/md"
import { FiPhoneCall} from "react-icons/fi"
import {FaCloudDownloadAlt} from "react-icons/fa"
import {  Typewriter } from "react-simple-typewriter";
import sushant from "./Sushant_Shekhar_Resume.pdf"
function App() {
  const toast = useToast();
  const [click, setClick] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messsage, setMessage] = useState("");

  function downloadFile() {
    let link = document.createElement("a");
    link.download = "Sushant_Shekhar_Resume.pdf";
    link.href = sushant;
    link.click();
    link.remove();
  }
  return (
    <div className="App">
      {/* Navbar  */}
     
      <div className="Nav_Container ">
      <div id="nav-menu">
        <div className="wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/105901300?v=4"
            style={{ borderRadius: "50%" }}
            alt="logo"
            width="50px"
            height="50px"
          />
        </div>
        </div>
        <div>s
          <ul
            id="navitems"
            className={click ? "#navitems" : "#navitems active"}
          >
            <li >
              <a href="#home" className="nav-link home" >Home</a>
            </li>
            <li >
              <a href="#about" className="nav-link about" >About</a>
            </li>
            <li >
              <a href="#skills" className="nav-link skills">Skills</a>
            </li>
            <li  >
              <a href="#projects" className="nav-link projects" >Projects</a>
            </li>
            <li>
              <a href="#contact"  className="nav-link contact">Contact</a>
            </li>
            <li>
              {" "}
              <button class="button-21" style={{display:"flex",gap:5}} id="resume-button-1"  onClick={() => {
                    window.location.href =
                      "https://drive.google.com/file/d/1xMMFWpietjNymM1NeB3wafLPa4iBI9q3/view";
                    downloadFile();
                  }}>
              
                  Resume <FaCloudDownloadAlt color="black"  size={25}/>
                  </button>
              
              
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
     
          {/* Home */}
      <div id="home" className="intro">
        <div>
          <h4>Hi there 👋🏽, i'm</h4>
          <h1 className="name"  id="user-detail-name">Kumar Sushant Shekhar</h1>
          <h2>
            <span>
              {" "}
              <Typewriter
              id="user-detail-intro"
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
          <button class="button-21" style={{display:"flex",gap:5,height:"50px"}} id="resume-button-1"  onClick={() => {
                    window.location.href =
                      "https://drive.google.com/file/d/1xMMFWpietjNymM1NeB3wafLPa4iBI9q3/view";
                    downloadFile();
                  }}>
              
                  Resume <FaCloudDownloadAlt color="black"  size={25}/>
                  </button>
        </div>
      </div>
             {/* About */}
      <div id="about" className="about1 about section">
        <div>
          <h1 style={{ marginTop: "5px" }}>About me</h1>
        </div>
        <div className="aboutgrid">
          <div>
            <img src="./profile.png" alt="sushant shekhar" class="home-img" />
          </div>
          <div>
          
            <h2 className="name1">
            Innovative, solution-driven web developer with proficiency in MERN 
            and capable of writing production-ready code using HTML, CSS, and JavaScript.
             Proven experience in developing multiple web-based applications with a good 
            collaboration skills and can easily be adept with the work environment.
             
            </h2>
          </div>
        </div>
      </div>
            {/* Skills */}
      <div id="skills" className="skill">
        <div>
          {" "}
          <h1 style={{ marginTop: "5px" }}>Skills</h1>
        </div>
        <div className="skillsimg">
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
        </div>
      </div>
             {/* Projects */}
      <div id="projects" className="project">
        <div>
          <h1>Projects </h1>
        </div>
        <div className="showbox">
          <div className="projectbox project-card">
            <div>
              <Img
                src="./myntraclone.jpeg"
                alt="myntraclone"
                borderRadius={"10px"}
              />
            </div>

            <div>
              <center>
                <h1 style={{ fontSize: "30px", lineHeight: "25px" }} class="project-title">
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
                <button class="button-21">Javascript</button>
                <button class="button-21">Json Server</button>
                <button class="button-21">Bootstrap 4</button>
                <button class="button-21">Render</button>
                <button class="button-21">Chakra UI</button>
              </span>
              <span className="github project-github-link" >
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
                  href="https://myntraclonedecember.netlify.app/"
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
          <div className="projectbox project-card">
            <div>
              <Img
                src="./bluemercury.jpeg"
                alt="blue mercury clone"
                borderRadius={"10px"}
              />
            </div>

            <div>
              <center>
                <h1 style={{ fontSize: "30px", lineHeight: "25px" }} class="project-title">
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
                  href="https://monumental-cassata-c694c6.netlify.app/"
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
          <div className="projectbox project-card">
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
                <h1 style={{ fontSize: "30px", lineHeight: "25px" }} class="project-title">
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
                  href="https://parallel-cast-unit4-project.netlify.app/"
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
          <div className="projectbox project-card">
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
                <h1 style={{ fontSize: "30px", lineHeight: "25px" }} class="project-title">
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
                  href="https://fancy-twilight-33906a.netlify.app/"
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
        </div>
      </div>
       {/* calender */}
      <div id="calender" className="calender">
        <center>Calender</center>
        <center>
          <img
            src="https://ghchart.rshah.org/sushantshekhar82"
            alt="sushantshekhar82"
            width="100%"
            height="500px"
            style={{ margin: "5px" }}
            class="react-activity-calendar" 
          />
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
          <Img
            className="stats"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=sushantshekhar82&show_icons=true&locale=en&layout=compact&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
            alt="sushantshekhar82"
            id="github-top-langs"
          />
        </center>
      </div>
      <center
        style={{ fontSize: "35px", color: "#0A7AD6", fontWeight: "bold" }}
      >
        HAVE A PROJECT? OR JUST LOOKING TO HIRE?
        <span style={{display:"flex", justifyContent:"center" ,gap:10}}>
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
                </a> </span>
      </center>
       {/* contact */}
      <div id="contact" className="contact1">
        <div className="hideform">
          <Img
            src="https://avighnaclasses.com/wp-content/uploads/2022/12/81732-contact-us.gif"
            width="500px"
            height="auto"
            alt="form"
          />
        </div>
        <div className="form">
          <Text>First Name</Text>
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
            value={messsage}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave your messsage here"
          ></textarea>
          <br />
          <button
            onClick={() => {
              if (name !== "" && email !== "" && messsage !== "") {
                toast({
                  title: "Thank you , I will connect soon",

                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "Enter all Fields",

                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              }
            }}
            class="button-21"
          >
            Submit
          </button>
        </div>
      </div>
      <span className="contactdetail">
      <a href="tel:8298937625">
        <div className="contactbox">
          <button class="button-22" id="contact-phone" >
           <FiPhoneCall style={{borderRadius:"5px",margin:"auto" }} size={"20px"}/>
            <Text
              bgGradient="linear(to-l,white, white)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
             +918298937625{" "}
            </Text>
          </button>
        </div>
        </a>
        <a href="mailto:sushant.shekhar151997@gmail.com" target="_blank" rel="noreferrer">
        <div className="contactbox">
          
            <button class="button-22"  id="contact-email">
          <MdEmail style={{borderRadius:"5px",margin:"auto" }} size={"20px"}/>
              <Text
                bgGradient="linear(to-l,white, white)"
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
            < IoLogoWhatsapp style={{borderRadius:"5px",margin:"auto" }} size={"20px"}/>
               
              <Text
                bgGradient="linear(to-l,white, white)"
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
        <div className="bottom">Designed and Developed by Sushant Shekhar,All rights reserved.</div>
      </div>
    </div>
  );
}

export default App;
