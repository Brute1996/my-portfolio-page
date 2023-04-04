import { Link } from "react-router-dom";
import { PortfolioCardStyle } from "../../pages/pages-styles/Portfolio.styled"
import {BsFillArrowUpRightCircleFill, BsGithub} from 'react-icons/bs'


export const PortfolioItem = ({projectImage, projectTitle, projectDescr, projectTechnologies, projectLink, projectGitLink}) => {

    return (
        <PortfolioCardStyle>
            <Link className="portfolio-link"
                to={projectLink}
                rel="noopener noreferrer"
                target="_blank"
            >
                <img className="portfolio-img" src={projectImage} alt={projectTitle} />
                <p className="visit-text"><b>Visit <BsFillArrowUpRightCircleFill/></b></p>
            </Link>
            
            <div className="project-text">
                <h2 className="project-card-title">{projectTitle}</h2>
                <p className="project-card-technologies"><b>Technologies:</b> {projectTechnologies}</p>
                <p className="project-card-description">{projectDescr}</p>
            </div>

            <Link className="project-git-link"
                to={projectGitLink}
                rel="noopener noreferrer"
                target="_blank">
                
                <p>Git <BsGithub /> link</p>
            </Link>
        </PortfolioCardStyle>
    );
};