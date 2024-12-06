import { IndivGameStyle, JSXGamesPageStyle } from "../../styles/styledComponents"
import { useNavigate } from "react-router-dom"
import TicTacToeImg from "../../assets/jsx_games.jpg"

const JSXGames = function() {
  
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    navigate(e);
  };
  
  return <>
    <JSXGamesPageStyle>
      <IndivGameStyle onClick={() => handleClick('/IndivProjects/IndivJSXGames/TicTacToe')} src={TicTacToeImg} alt="tictactoe image"></IndivGameStyle>
    </JSXGamesPageStyle>
  </>
}

export default JSXGames