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
        <AboutMeParagraphStyle>Hi, my name is Nathan. I’m a penultimate-year student at UNSW pursuing a double degree in Mechanical Engineering and Computer Science. With a passion for integrating technology and engineering, I plan to address challenges in fields like robotics and automation. I'm excited to connect with like-minded professionals and explore innovative opportunities!</AboutMeParagraphStyle>
      </HomePageStyle>
    </div>
  </>
}

export default HomePage