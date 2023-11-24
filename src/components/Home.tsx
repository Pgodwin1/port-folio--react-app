import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import myprofile from '../assets/myprofile.jpeg'
import { Header, Nav, Title, Desc, Profile, Img } from '../App.style'

const Home = () => {
    return (
        <>
            <Header>
               <Title>
                <h2>Godwin</h2>
                <Nav>
                    <a href="">About</a>
                    <a href="">Work</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Download CV</a>
                </Nav>
                </Title>
                <Profile>
                <div><h2>Hi I'm Godwin</h2></div>
            <Desc>
                <div>
                    <p>A Full-stack Node.js/React software engineer with extensive experience and skill,<br />
                    with a proven track record of providing effective solutions for tech-focused businesses. <br />
                    I have developed my abilities over the past year to create and build durable applications <br />
                    that improve productivity and user happiness. proficient in building scalable, <br />
                    high-performance systems using cutting-edge technologies like TypeScript, Node.js, and React.</p>
                    <div className='locate'>
                    <IoLocationOutline />
                    <h4>Lagos, Nigeria</h4>
                    </div>
                    <div className='icon'>
                    <FaGithub /><FaXTwitter /><FaLinkedin />
                    </div>
                 </div>
                 <Img>
                    <img src={myprofile} style={{width: "100%", height: "200px"}} alt="" />
                 </Img>
            </Desc>
            </Profile>
            </Header>
        </>
    )
}

export default Home