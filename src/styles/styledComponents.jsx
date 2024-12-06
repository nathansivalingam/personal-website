import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

// NAVBAR
export const Navbar = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
  backgroundColor: '#274472',
  color: 'white',
  fontSize: '1.4rem',
}))

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-shadow: 0 0 2px white, 0 0 5px white;
  }
`

// HOME PAGE
export const HomePageStyle = styled.div(() => ({
  display: 'block',
  textAlign: 'center',
  padding: '1%',
  fontSize: '1.4rem',
  maxWidth: '900px',
}))

export const SocialMediaStyle = styled.div(() => ({
  padding: '1%',
  fontSize: '1.4rem',
  display: 'flex',
  justifyContent: 'space-evenly',
}))

export const StyledImg = styled.img`
  width: 95%;
  height: 39.7%;
  border: 5px solid white;
  margin-top: 1%;
`

export const AboutMeStyle = styled.div(() => ({
  padding: '1%',
  fontSize: '1.4rem',
}))

export const AboutMeParagraphStyle = styled.div(() => ({
  fontSize: '1.4rem',
}))

export const StyledSocialLink = styled(Link)`
  color: #274472;
  text-decoration: none;

  &:hover {
    color: #274472;
    text-shadow: 0 0 2px #274472, 0 0 2px #274472;
  }
`

// PROJECTS PAGE
export const ProjectPageStyle = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
}))

export const IndivProjectStyle = styled.div`
  width: 95%;
  height: 200px;
  background-color: #5885AF;
  border-radius: 5px;
  margin-top: 1%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

export const IndivProjectImgStyle = styled.div(() => ({
  height: '100%',
  width: '225px',
  backgroundColor: 'white',
  borderRadius: '5px',
  border: '2px solid white',
}))

export const IndivProjectContentStyle = styled.div(() => ({
  width: 'calc(100% - 225px)',
  height: '100%',
  backgroundColor: '#C3E0E5',
  borderRadius: '5px',
  border: '2px solid white',
}))

export const MoreComingSoonStyle = styled.div(() => ({
  width: '95%',
  height: '200px',
  backgroundColor: '#5885AF',
  borderRadius: '5px',
  marginTop: '1%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  marginBottom: '1%',
  color: 'white',
}))

export const StyledProjectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const ProjectText = styled.div(() => ({
  padding: '10px 20px 0 20px',
}))


// HAND GESTURE ROBOT
export const HandGestureRobotPageStyle = styled.div(() => ({
  display: 'flex',
  justifyContent:'center',
  flexDirection: 'column',
  padding: '0px 25px',
}))

export const HandGestureRobotHeaderStyle = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '600px',
  padding: '0px 25px'
}))

export const StyledContributorLink = styled(Link)`
  color: #274472;
  text-decoration: none;

  &:hover {
    color: #274472;
    text-shadow: 0 0 2px white, 0 0 5px white;
  }
`

export const StyledHeaderLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: black;
    text-shadow: 0 0 2px white, 0 0 5px white;
  }
`

// PERSONAL WEBSITE PAGE
export const StyledGitHubRepoLink = styled(Link)`
  color: #274472;
  text-decoration: none;
  padding-bottom: 20px;

  &:hover {
    color: black;
    text-shadow: 0 0 2px white, 0 0 5px white;
  }
`

export const PersonalWebsitePageStyle = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '30vh',
}))

// JSXGames
export const JSXGamesPageStyle = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '10px',
  gap: '10px',
}))

export const IndivGameStyle = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  border: 5px solid white;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

export const TicTacToePageStyle = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center', // Centers horizontally
  alignItems: 'center', // Centers vertically
  height: '80vh', // Ensures the div takes full viewport height
  textAlign: 'center', // Centers text horizontally inside the div
}));