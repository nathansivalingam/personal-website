import '../../App.css'
import { StyledGitHubRepoLink, PersonalWebsitePageStyle } from '../../styles/styledComponents'

const PersonalWebsite = function() {
  return <>
    <PersonalWebsitePageStyle>
      <div className="main-body">
        <h1>You are currently exploring the website 💻</h1>
      </div>
      <div className="main-body">
        <StyledGitHubRepoLink to="https://github.com/nathansivalingam/personal-website">Click Here to Access the Personal Website Github Repo</StyledGitHubRepoLink>
      </div>
    </PersonalWebsitePageStyle>
  </>
}

export default PersonalWebsite