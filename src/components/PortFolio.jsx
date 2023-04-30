import React, { useState } from 'react';
import brian from '../components/data/about.png' 
import brian1 from '../components/data/brian.jpg'
import {AiFillGithub, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter, BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillCalendar2DateFill} from 'react-icons/bs'
import {MdArrowUpward} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'


const PortFolio = () => {
    // toggle nav
    let menuIcons = document.querySelector('#menu-icon');
    let navbars= document.querySelector('.navbar');

    const handleToggles=()=>{
        // navbar.classList.toggle('active');
        navbars.classList.toggle('active')
    }

    let sections= document.querySelectorAll('section');
    let navLinks= document.querySelectorAll('header nav a');

    window.onscroll=()=>{
        sections.forEach(sec => {
            let top =window.scrollY;
            let offset= sec.offsetTop - 100;
            let height= sec.offsetHeight;
            let id= sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                // active nav 
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                })
            }
        })
        let header =document.querySelector('header');

        header.classList.toggle('sticky',window.scrollY > 100);

          navbars.classList.remove('active');
         
    }
  return (
    <div>
              
<header className="header">
    <a href="#" className="logo">Brian <span>Bandi.</span> </a>
    <div className='menu' id='menu-icon'>
        <button className='' style={{fontSize:'20px'}} onClick={handleToggles} >
        <AiOutlineMenu/>
        </button>
    </div>
    <nav className="navbar">
     <a href="#home" className="active">Home</a>
     <a href="#about">About</a>
     <a href="#education">Education</a> 
     <a href="#skills">Skills</a>
     <a href="#contact">Contact</a>
     <span className="active-nav"></span>
    </nav>
</header>
        {/* home section */}
        <section className='home' id='home'>
            <div className='home-content'>
                <h1>Hi, I'm <span>Brian Bandi</span></h1>
                <div className='text-animate'>
                    <h3>FullStack Developer</h3>
                </div>
                <p>
                 My name is Brian,i'm a FullStack developer based in Nairobi,Kenya
                 i have deployed many types of fullStack projects from well known Dj applications to Eccommerce
                 platforms,
                 i'm passionate about cutting-edge,pixel-perfect,beutiful interfaces and intutively
                 implemented UX<span>/</span> UI Design.
                </p>
                <div className='btn-box'>
                    <a href='mailto:briankim7587@gmail.com' className='btn'>Hire Me</a>
                    <a href="https://wa.me/25498163231/?text=Hello,Thenkie for reaching me here,now let's talk
                     about the Business" className='btn'>Let's Talk</a>

                </div>
            </div>
            <div className='home-sci'>
                <a href='https://msng.link/o/?BryanBandi=fm'><i> <FaFacebookF/> </i></a>
               <a href='https://www.twitter.com'><i><BsTwitter/></i></a>
               <a href='https://www.linkedin.com'><i><BsLinkedin/></i></a>
              
            </div>
            <div className='home-imgHover'></div>
        </section>
        {/* about section */}
        <section className="about" id='about'>
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                <img src={brian1} alt="Brian Bandi-img" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3>FullStack Developer!</h3>
                <p> 
                    Hello, My name is Brian Bandi and i enjoy creating things that live on
                    the internet.My interest in web development started back in 2019 when i
                    decided to try editing a simple digital calculator and that turns out 
                    hacking together a perfect working code that taught me a lot about
                    HTML,CSS & JS!
                    Fast forward to today, and i've had the privilege of working at
                    &#160;
                 <span>an advertising agency a start-up huge corporation,</span> and
                 &#160;
                 <span>a student-led design studio.</span>
                 &#160;
                 My main focus these days is building accessible ,inclusive products and
                 digital experiences at <span>Upstatement</span> for a variety of clients.
                 I have a couple of some of the projects posed on my <span>github</span>
                 &#160; account.
                    
             </p>
            
               
                 <p className="about-content" style={{color:'yellowgreen',fontStyle:'italic'}}>
                    Click the button below to check out! 
                    </p> 
           
            <div className="btn-box btns">
                  <a href="https://github.com/Briankimari/farm-management-app" className="btn">My Projects</a>
            </div>
            </div>
        </section>
        {/* education section */}
        <section className="education" id="education">
            <h2 className="heading">My <span>Journey</span></h2>
            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">Education</h3>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i> <i><BsFillCalendar2DateFill size={18}/></i></i> 2019-2020</div>
                                <h3>Diploma Certificate - Collage</h3>
                                <p>
                                   Back in 2019,i chose to learn Web Development & Design,I found
                                   Web Development interesting bacause a web-based application or even just
                                   a website consists of many individual components,either front-end or
                                   back-end they all come together to produce a final product.I also took
                                   a minutes before choosing this course and i found out that Web Devolopment
                                   industry expands rapidly, in a pace that it requires constant learning.
                                   The courses that were implemented in the Web Development program from our
                                   Institustion was comprehensive,and i was impressed to see the knowledge i would
                                   possess after the Web Development program graduation.
                                   
                                </p>
                            </div>
                        </div>

                          <div className="education-content">
                            <div className="content">
                                <div className="year"> <i> <i><BsFillCalendar2DateFill size={18}/></i></i> 2020-2021</div>
                                <h3>My Own Projects - Collage</h3>
                                <p>
                                    After an year of learning Web Development, I gained knowledge to start
                                    my own projects for practices.In my opinion, the best part of the Web Development
                                    program was composite projects.I find it fascinating and deeply productive to
                                    have a mojor project which consists of separate parts each a project for its respective course.
                                    This approach motivated me to up 100% into the composite projects which resulted in a work
                                    that i'm proud to show potential employers.
                                </p>
                            </div>
                        </div>

                          <div className="education-content">
                            <div className="content">
                                <div className="year"> <i> <i><BsFillCalendar2DateFill size={18}/></i></i> 2021-2022</div>
                                <h3>InternShip & Attachments - Collage</h3>
                                <p>
                                During my 1<sup>st</sup> semister, i was very intersted in taking up an attachment
                                in one of the Web Development company so that i could increase
                                my knowledge and skills.
                                <p>
                                    During my 2<sup>nd</sup> semister i was very interested in taking up an InternShip
                                    so that i could use my knowledge and skills in order to keep learning
                                    and developing.I received an <span> <a href="https://letsgrowmore.in">LetsGrowMore</a></span> internship link
                                    from my friend.I researched it and i immediately applied for the web development internship.
                                    They provided 5 Tasks.This internship gave us Challeging Opportunities
                                    ,Real World Projects.Overall, it was a great learning experience and i worked on diffrent
                                    projects that i used to test my skills.
                                </p>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">Experience</h3>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><BsFillCalendar2DateFill size={18}/></i> 2021-2022</div>
                                <h3>Full-stack Development - Company</h3>
                                <p>
                                     After the end of internship i was lucky to work on a full-stack development
                                     company with a team of five web developers to design scalabase applications
                                     for clienst,conduct code changes in <span>HTML & CSS,JS-using react</span> and develop stems to
                                     import 1M records into a new database.
                                     <p>
                                        We also created a fully functional website featuring upciming news updates for 
                                        upcoming films productions,casting and release dates,conducted coding in <span>HTML & CSS</span>
                                        ,and ensured mobile functionality
                                     </p>
                                </p>
                            </div>
                        </div>

                          <div className="education-content">
                            <div className="content">
                                <div className="year"> <i><BsFillCalendar2DateFill size={18}/></i> 2022-March-June</div>
                                <h3>Web Development Project,Nyeri National Institute - Acadamic Project </h3>
                                <p>
                                  Cordinated with a team of ICT students in designing and creating a E-learning websites
                                  ,including School Reports & news,Bank slips,Book keeping and Hostel individual records,
                                  also identifying solutions to technical issues to enhance website functionality
                                </p>
                                <p>
                                    We also implemented a freely interactive website directly with students and lecturers to 
                                    gather website requirements and ensure web security standard meets their needs.

                                </p>
                            </div>
                        </div>

                          <div className="education-content">
                            <div className="content">
                                 <div className="year"> <i><BsFillCalendar2DateFill size={18}/></i>2023 Jan-March</div>
                                 <h3>Farm Management App - Company</h3>
                                 <p>
                                     Created a fullStack web application for farmers using a responsive modern ui/ux,it
                                     included ability of farmers be able add Assets,Livestock,vetinary/medical calender.
                                     The projects included a re-usable code for future reference.
                                     <p>
                                      The project also included a database highly secured and abiliy of farmers be able to
                                      create their own account and adding their details.Each and every farmer has an ability to 
                                      post his/her animal sell it or buy and pay through the website account, then new account balance is set.
                                      Farmer communacate with other farmers through a chat system based on the web app.
                                      The App is user friendly as users have ability to set their own settings and be able to
                                      reset their account or just delete their account in the database
                                     </p>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
        {/* skills */}
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span></h2>
            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Coding Skills</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>HTML <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                <h3>CSS <span>80%</span></h3>
                                <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                <h3>JavaScript <span>65%</span></h3>
                                <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                <h3>Python <span>70%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-column">
                    <h3 className="title">Professional Skills</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>Web Design <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                <h3>Web Development <span>66%</span></h3>
                                <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                <h3>Graphic Design <span>79%</span></h3>
                                <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                <h3>SEO Marketing <span>60%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* SECTION contact */}
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
           <div className="me">
            <p className="get-me">
                Contant me through the following platforms!
                Click on the <span>icons below</span> 
                &#160; to be redirected to
                my social platforms,Thenkie for getting in-contact with me!!
                <div className='thanks'>
                     <span className='know' >Let's Know each other!!</span>
                </div>
                   
            </p>
              <div className='icon-me'>
                <a href="https://wa.me/25498163231/?text=Hello,Thenkie for reaching me here,now let's talk about the Business"><i> <BsWhatsapp/> </i></a>
               <a href='mailto:briankim7587@gmail.com'><i><AiOutlineMail/></i></a>
               <a href='https://github.com/Briankimari/farm-management-app'><i><AiFillGithub/></i></a>
              
            </div>
            <div className="see">
              <p className="see-me">Let me</p>
              <p className="see-me">Create</p>
              <p className="see-me">For You</p>
              <p className="see-me">A Modern</p>
              <p className="see-me">Website</p>

               
            </div>
         
              </div>
         
        </section>
          <div className='end'>
          <div className='icon-number'>
                <a href='tel:0743810773'><i> <FiPhoneCall/> </i></a>
              </div>
            <div className="number">
             <a href='tel:0743810773'><i> 0743810773<span> /</span></i></a>
             <a href='tel:0791044526'><i> 0791044526<span> /</span></i></a>
             <a href='tel:0104647284'><i> 0104647284<span>.</span></i></a>
               
            </div>
           </div>
        {/* footer */}
        <footer className="footer">
            <div className="text">
                <p>Copyright &copy; 2023 by Brian Bandi | All Right Reserved.</p>
            </div>
            <div className="footer-iconTop">
               <a href="#"><i><MdArrowUpward size={20}/></i></a>
            </div>
        </footer>
    </div>
  );
}

export default PortFolio;
