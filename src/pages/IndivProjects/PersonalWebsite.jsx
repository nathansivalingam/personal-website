import '../../App.css'
import { StyledGitHubRepoLink } from '../../styles/styledComponents'

const PersonalWebsite = function() {
  return <>
    <div className="main-body">
      <h1>You are currently exploring the website 💻</h1>
    </div>
    <div className="main-body">
      <StyledGitHubRepoLink to="https://github.com/nathansivalingam/personal-website">Personal Website Github Repo Link</StyledGitHubRepoLink>
    </div>
  </>
}

export default PersonalWebsite