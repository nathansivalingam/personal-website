import { SocialMediaStyle, 
  HomePageStyle, 
  StyledImg, 
  AboutMeStyle, 
  AboutMeParagraphStyle, 
  StyledSocialLink } from "../styles/styledComponents"
import aboutMeImg from '../assets/about_me.jpg'
import { Link } from 'react-router-dom';

const HomePage = function() {
  return <>
    <HomePageStyle>
      <SocialMediaStyle>
        <StyledSocialLink to='https://www.linkedin.com/in/nathansivalingam/'>LinkedIn</StyledSocialLink>
        <StyledSocialLink to='https://github.com/nathansivalingam'>Github</StyledSocialLink>
        <StyledSocialLink to='https://www.facebook.com/nathan.sivalingam.1/'>Facebook</StyledSocialLink>
        <StyledSocialLink to='https://www.instagram.com/nathan_riyan/'>Instagram</StyledSocialLink>
      </SocialMediaStyle>
      <StyledImg src={aboutMeImg} alt="aboutMeImg"></StyledImg>
      <AboutMeStyle>About Me</AboutMeStyle>
      <AboutMeParagraphStyle>This website is a project I’m developing to improve my frontend programming skills. It serves as an interactive web-based version of my resume, and I plan to link it to my LinkedIn profile upon completion to better engage with potential recruiters. Additionally, this project showcases my frontend development experience and will be a valuable asset as I pursue software engineering and computer science roles in the industry.</AboutMeParagraphStyle>
    </HomePageStyle>
  </>
}

export default HomePage