import { SocialMediaStyle, 
  HomePageStyle, 
  StyledImg, 
  AboutMeStyle, 
  AboutMeParagraphStyle, 
  StyledSocialLink } from "../styles/styledComponents"
import aboutMeImg from '../assets/about_me.jpg'
import '../App.css'

const HomePage = function() {
  return <>
    <div className="main-body">
      <HomePageStyle>
        <SocialMediaStyle>
          <StyledSocialLink to='https://www.linkedin.com/in/nathansivalingam/'>LinkedIn</StyledSocialLink>
          <StyledSocialLink to='https://github.com/nathansivalingam'>Github</StyledSocialLink>
          <StyledSocialLink to='https://www.facebook.com/nathan.sivalingam.1/'>Facebook</StyledSocialLink>
          <StyledSocialLink to='https://www.instagram.com/nathan_riyan/'>Instagram</StyledSocialLink>
        </SocialMediaStyle>
        <StyledImg src={aboutMeImg} alt="aboutMeImg"></StyledImg>
        <AboutMeStyle><b>About Me</b></AboutMeStyle>
        <AboutMeParagraphStyle>This website is a project I’ve developed to improve my frontend programming skills. It serves as an interactive web-based version of my resume, and is linked to my LinkedIn profile to better engage with potential recruiters. Additionally, this project showcases my frontend development skills and will be a valuable asset as I pursue software engineering and computer science roles in the industry. The projects showcased on this website also include some of Mechanical Engineering endeavours which will be advantageous during applications for Mechanical Engineering internships.</AboutMeParagraphStyle>
      </HomePageStyle>
    </div>
  </>
}

export default HomePage