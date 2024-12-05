import { ProjectPageStyle, IndivProjectStyle } from "../styles/styledComponents"

const Projects = function() {
  return <>
    <ProjectPageStyle>
      <IndivProjectStyle>
        <div>
          Robot Project
        </div>
        <div>
          Project 1 Content
          <div>Title: </div>
          <div>Description: </div>
          <div>Creation Date: </div>
        </div>
      </IndivProjectStyle>
      <IndivProjectStyle>Personal Website Project</IndivProjectStyle>
      <IndivProjectStyle>Javascript Games</IndivProjectStyle>
      <IndivProjectStyle>More Coming Soon...</IndivProjectStyle>
    </ProjectPageStyle>
  </>
}

export default Projects