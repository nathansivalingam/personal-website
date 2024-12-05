import { AboutMeStyle, HomePageStyle, StyledImg } from "../styles/styledComponents"
import aboutMeImg from '../assets/about_me.png'

const HomePage = function() {
  return <>
    <HomePageStyle>
      <AboutMeStyle>About Me</AboutMeStyle>
      <StyledImg src={aboutMeImg} alt="aboutMeImg"></StyledImg>
      <div>Hello</div>
    </HomePageStyle>
  </>
}

export default HomePage