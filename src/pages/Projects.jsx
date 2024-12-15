import { ProjectPageStyle, 
  IndivProjectStyle, 
  IndivProjectImgStyle, 
  MoreComingSoonStyle, 
  IndivProjectContentStyle,
  StyledProjectImg,
  ProjectText } from "../styles/styledComponents"
import robotImg from '../assets/robot.png'
import personalWebsiteImg from '../assets/personal_website.png'
import jsxGamesImg from '../assets/jsx_games.jpg'
import { useNavigate } from 'react-router-dom'

const Projects = function() {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    navigate(e);
  };
  
  return <>
    <ProjectPageStyle>
      <IndivProjectStyle onClick={() => handleClick('/IndivProjects/HandGestureRobot')}>
        <IndivProjectImgStyle>
          <StyledProjectImg src={robotImg} alt="robot"></StyledProjectImg>
        </IndivProjectImgStyle>
        <IndivProjectContentStyle>
          <ProjectText><b>Title →</b> Hand Gesture Robot</ProjectText>
          <ProjectText><b>Creation Date →</b> Jan 2024</ProjectText>
        </IndivProjectContentStyle>
      </IndivProjectStyle>
      <IndivProjectStyle onClick={() => handleClick('/IndivProjects/PersonalWebsite')}>
        <IndivProjectImgStyle>
          <StyledProjectImg src={personalWebsiteImg} alt="personal website"></StyledProjectImg>
        </IndivProjectImgStyle>
        <IndivProjectContentStyle>
          <ProjectText><b>Title →</b> Personal Website</ProjectText>
          <ProjectText><b>Creation Date →</b> Dec 2024</ProjectText>
        </IndivProjectContentStyle>
      </IndivProjectStyle>
      <IndivProjectStyle onClick={() => handleClick('/IndivProjects/JSXGames')}>
        <IndivProjectImgStyle>
          <StyledProjectImg src={jsxGamesImg} alt="jsx games"></StyledProjectImg>
        </IndivProjectImgStyle>
        <IndivProjectContentStyle>
          <ProjectText><b>Title →</b> JSX Games</ProjectText>
          <ProjectText><b>Creation Date →</b> Oct 2024</ProjectText>
        </IndivProjectContentStyle>
      </IndivProjectStyle>
      <MoreComingSoonStyle>
        More Coming Soon...
      </MoreComingSoonStyle>
    </ProjectPageStyle>
  </>
}

export default Projects