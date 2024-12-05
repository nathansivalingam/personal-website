import { ProjectPageStyle, IndivProjectStyle, IndivProjectImgStyle, MoreComingSoonStyle } from "../styles/styledComponents"

const Projects = function() {
  return <>
    <ProjectPageStyle>
      <IndivProjectStyle>
        <IndivProjectImgStyle>
          Robot Project
        </IndivProjectImgStyle>
        <div>
          Project 1 Content
          <div>Title: </div>
          <div>Description: </div>
          <div>Creation Date: </div>
        </div>
      </IndivProjectStyle>
      <IndivProjectStyle>
        <IndivProjectImgStyle>
          Personal Website Project
        </IndivProjectImgStyle>
        <div>
          Project 1 Content
          <div>Title: </div>
          <div>Description: </div>
          <div>Creation Date: </div>
        </div>
      </IndivProjectStyle>
      <IndivProjectStyle>
        <IndivProjectImgStyle>
          Javascript Games
        </IndivProjectImgStyle>
        <div>
          Project 1 Content
          <div>Title: </div>
          <div>Description: </div>
          <div>Creation Date: </div>
        </div>
      </IndivProjectStyle>
      <MoreComingSoonStyle>
        More Coming Soon...
      </MoreComingSoonStyle>
    </ProjectPageStyle>
  </>
}

export default Projects