import React from 'react'
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import sam from './data/sam9.jpg'
import {BsFillCalendar2DateFill} from 'react-icons/bs'
import {AiFillGithub, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {MdArrowUpward} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'


const Portfolio = () => {
  
    let navbars= document.querySelector('.navbar');

    const handleToggles=()=>{
    
        navbars.classList.toggle('active')
    }

 
    let sections= document.querySelectorAll('section');
    let navLinks= document.querySelectorAll('header nav a');

    window.onscroll=()=>{
        sections.forEach(sec => {
            let top =window.scrollY;
            let offset= sec.offsetTop - 100
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
    <div className='full-sam'>

                    
<header className="header">
    <a href="#" className="logo">Samuel <span>Henia</span> </a>
    <div className='menu' id='menu-icon'>
        <div className='' style={{fontSize:'20px',cursor:'pointer'}} onClick={()=>handleToggles()}  >
        <AiOutlineMenu size={30} />
        </div>
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
       
       {/* home */}
       <section id='home' className='home-1'>
      <div className='home-2'>
        <p>Hi I'm Samuel Henia, a<span> Front-End Developer</span>
         <div className='home-3'>
         <i>
           A passionate developer bringing you programming
           and design from the future. I am experienced in developing 
           interactive web and desktop applications, cutting-edge,pixel-perfect,beautiful
            interfaces and intutively implemented UX<span>/</span>UI Design.
         </i>
         
          
         
        </div>
         
       
        </p>
        <div className='btn-hm'>
          <a href='mailto:samuelhenia2@gmail.com'>Hire Me</a>
            <a href="https://wa.me/254746454686/?text=Hello,Thanks for reaching me,how about we create something great together?">Contact Me</a>

        </div>
        <div className='box-icons'>
          <a href="https://www.facebook.com"><FiFacebook size={25}/></a>
          <a href="https://[ig.me](<http://ig.me>)/m/</thatunofficial_baron"><FiInstagram size={25}/></a>
          <a href="https://twitter.com/messages/compose?recipient_id=1647959526077788164"><FiTwitter size={25}/></a>
          <a href="https://wa.me/254746454686/?text=Hello,Thanks for reaching me,how about we create something great together?"><BsWhatsapp size={25}/></a>
        </div>
      
      </div>
    <div className='home-imgHover'></div>
       </section>
       {/* About */}
       <section id='about' className='about-01' >
        <h1>About <span> &#160; Me.</span></h1>
        <div className='circle-1'>
         <img src={sam} alt="henia"  />
          <span className='circle-spin'></span>
         
        </div>
         <div>
            <h1 className='about-02'>Frontend &#160; <span>Developer!</span></h1>
          </div>
          <div className='story-01'>
        <p >
        Hello, My name is Samuel Henia.. I create things that live on the internet. Back in highschool, I tried editing a simple digital calculator
        with a perfect running code and then <span>Boom!</span> There was my first ever creation, I felt like a genius. That was when my interest in web development and design started.
        It taught me alot about HTML, CSS & JS! Fast forward to today, and I've had the privelege of working at student-led design studio and 
        an advertising agency. I am focused in building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
        I have a couple of some of my projects posted in my github account. 
         
        </p>
        </div>
        <p className='tag-1'>click the button below to check out!</p>
        <div className='butto'>
           <a href="https://github.com/KKorosiv/KKorosiv">My Projects</a>

        </div>
       

       </section>
  <section className="education" id="education">
            <h2 className="heading">My <span>Journey</span></h2>
            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">Education</h3>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"> <i> <i><BsFillCalendar2DateFill size={18}/></i></i> 2019-2020</div>
                                <h3>Diploma Certificate - College</h3>
                                <p>
                                   Back in 2019,i chose to learn Web Development & Design,I found
                                   Web Design interesting bacause a web-based application or even just
                                   a website consists of many individual components,either front-end or
                                   back-end they all come together to produce a final product.I also took
                                   a minute before choosing this career and i found out that  Devolopment
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
                                <h3>My Own Projects - College</h3>
                                <p>
                                    After a year of learning Web Design, I gained knowledge to start
                                    my own projects for practices.In my opinion, the best part of the Web Design
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
                                <h3>InternShip & Attachments - College</h3>
                                <p>
                                During my 1<sup>st</sup> semister, i was very intersted in taking up an attachment
                                in one of the Web Development company so that i could increase
                                my knowledge and skills.
                                <p>
                                    During my 2<sup>nd</sup> semester, I was very interested in taking up an InternShip
                                    so that i could further my knowledge and skills in web design
                                    and developing.I received an <span> <a href="https://letsgrowmore.in">LetsGrowMore</a></span> internship link
                                    from a friend.I researched it and i immediately applied for the web development internship.
                                    They provided 5 Tasks.This internship gave us Challeging Opportunities
                                    ,Real World Projects.Overall, it was a great learning experience and i worked on different
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
                                <h3>Front-End Development - Company</h3>
                                <p>
                                     After the end of internship i was lucky to work on a web development
                                     company with a team of five web developers to design for them scalabase applications
                                     for clienst,conduct code changes in <span>HTML & CSS,JS-using react</span> and develop stems to
                                     import 1M records into a new database.
                                     <p>
                                        We also created a fully functional website featuring upcoming news updates for 
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
                                  Cordinated with a team of ICT students in designing and creating an E-learning website
                                  ,including School Reports & news,Bank slips,Book keeping and Hostel individual records,
                                  also identifying solutions to technical issues to enhance website functionality.
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
                                     Created the front-end of a web application for farmers using a responsive modern ui/ux,it
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
        {/* skills section */}
      <section className='skills' id='skills'>
        <h2>My <span> &#160;Skills</span></h2>
        <div className='skills-row'>
          <div className='skills-column'>
            <h3 className='title'>Coding Skills</h3>
            <div className='skills-box'>
              <div className='skills-content'>
                <div className='progress-1'>
                  <h3>HTML <span>90%</span></h3>
                  <div className='bar'><span></span></div>

                </div>

                   <div className='progress-1'>
                  <h3>CSS <span>80%</span></h3>
                  <div className='bar'><span></span></div>

                </div>

                   <div className='progress-1'>
                  <h3>JavaScript <span>58%</span></h3>
                  <div className='bar'><span></span></div>

                </div>

                   <div className='progress-1'>
                  <h3>Python <span>65%    </span></h3>
                  <div className='bar'><span></span></div>

                </div>

              </div>

            </div>

          </div>
          {/* pro-skills */}
           <div className='skills-column'>
            <h3 className='title'>Professional Skills</h3>
            <div className='skills-box'>
              <div className='skills-content'>
                <div className='progress-1'>
                  <h3>Web Design <span>90%</span></h3>
                  <div className='bar'><span></span></div>

                </div>

                   <div className='progress-1'>
                  <h3>Web Development <span>60%</span></h3>
                  <div className='bar'><span></span></div>

                </div>

                   <div className='progress-1'>
                  <h3>Graphic Design <span>75%</span></h3>
                  <div className='bar'><span></span></div>

                </div>

                   <div className='progress-1'>
                  <h3>SEO Marketing<span>60%</span></h3>
                  <div className='bar'><span></span></div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      <section className='contact-1' id='contact'>
        <h2>Contact<span> &#160;Me!</span></h2>
        <div className='storo'>
          Contact me through the following platforms!
          Click the icons below to be redirected to my social platforms.
        </div>
        <div className='thanks'>Let's create something great together and have fun doing it too.</div>
        <div className='icons-sam'>
          <div className='icons-sam'>
                <a href="https://wa.me/254746454686/?text=Hello,Thanks for reaching me,how about we create something great together?"><i> <BsWhatsapp size={50}/> </i></a>
               <a href='mailto:samuelhenia2@gmail.com'><i><AiOutlineMail size={50}/></i></a>
               <a href='https://github.com/KKorosiv/KKorosiv'><i><AiFillGithub size={50}/></i></a>
              
            </div>
         </div>
            <div className='see'>
              <p className='see-me'>Let me</p>
               <p className='see-me'>Create</p>
                <p className='see-me'>For You</p>
                 <p className='see-me'>A Modern</p>
                  <p className='see-me'>Website</p>

            </div>
            <div className='phone-1'>
              <i><FiPhoneCall size={50}/></i>
            </div>
            <div className='tel-01'>
              <a href="tel:0746454686">0746454686</a>
            </div>
      </section>
      <footer className='futa'>
      <div className='text-11'>
       <p>Copyright &copy; 2023 by Samuel Henia | All Right Reserved.</p>

      </div>
      <div className="footer-iconTop">
               <a href="#"><i><MdArrowUpward size={20}/></i></a>
            </div>
      </footer>
    </div>
  )
}
export default Portfolio
