
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';

function App() {
  const [click,setClick]=useState(true)
  return (
    <div className="App">
        <div className='Nav_Container '>
            <div className='wrapper'>
              <img src="https://avatars.githubusercontent.com/u/105901300?v=4" style={{borderRadius:"50%"}} alt="logo" width="50px" height="50px" />
            </div>
            <div>
              <ul id='navitems' className={click?"#navitems":"#navitems active"}>
                <li><a href='index.html'>Home</a></li>
                <li><a href='index.html'>About</a></li>
                <li><a href='index.html'>Skills</a></li>
                <li><a href='index.html'>Projects</a></li>
                <li><a href='index.html'>Contact</a></li>
                <li><a href='index.html'>Resume</a></li>
                <span style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2px"}}>
                <li><a href='https://github.com/sushantshekhar82' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='white' viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg></a></li>
                <li><a href='https://www.linkedin.com/in/sushantshekhar8/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
                </span>
              </ul>
            </div>
            <div id='mobile'>
              <i className={click?'fas fa-bars':'fas fa-times'} onClick={()=>setClick(!click)}></i>
             
            </div>
        </div>
     <div className='intro'> 
        <div><img src="./profile.png"/></div>
        <div>
          <h4 style={{color:'blue',fontSize:"16px"}}>Hi there 👋🏽, i'm</h4>
          <h1 style={{color:'white',fontSize:"40px",fontWeight:"bold"}}>Kumar Sushant Shekhar</h1>
          <h2 style={{color:'#6e6f72',fontSize:"20px",fontWeight:"bold"}}>Full Stack Web Developer</h2>
       <a download href="./Sushant_Shekhar_Resume.pdf">  <Button backgroundColor={"green.400"} style={{display:'inline-block',zIndex:"1"}} zIndex={0}>Resume</Button></a>
        
        
        </div>
        </div> 
       </div>
  );
}

export default App;
