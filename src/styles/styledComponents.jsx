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
  height: 'calc(100vh - 100px)',
  padding: '1%',
  fontSize: '1.4rem',
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
  textDecoration: 'underline',
}))

export const AboutMeParagraphStyle = styled.div(() => ({
  paddingLeft: '5%',
  paddingRight: '5%',
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

export const IndivProjectStyle = styled.div(() => ({
  width: '95%',
  height: '200px',
  backgroundColor: '#5885AF',
  borderRadius: '5px',
  marginTop: '1%',
  display: 'flex',
  flexDirection: 'row',
}))