import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
  backgroundColor: '#274472',
  color: 'white',
}))

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-shadow: 0 0 2px white, 0 0 5px white;
  }
`

export const HomePageStyle = styled.div(() => ({
  display: 'block',
  textAlign: 'center',
  height: 'calc(100vh - 100px)',
}))

export const AboutMeStyle = styled.div(() => ({
  padding: '1%',
  fontSize: '1.4rem',
}))

export const StyledImg = styled.img`
  width: 90%;
  height: 250px;
  border: 5px solid white;
`