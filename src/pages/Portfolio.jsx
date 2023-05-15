import { PortfolioItem } from "../components/PortfolioItem/PortfolioItem";
import { PortfolioList } from "./pages-styles/Portfolio.styled";

import {
    ComingSoonImg,
    CurrencyConverImg,
    FilmotekaImg,
    IceCreamImg,
    LandingImg,
    TheNotesAppImg,
    WebStudioImg
} from "../img";




const Portfolio = () => {
    return (
        <>
            <PortfolioList>
                <PortfolioItem
                    projectLink='https://brute1996.github.io/goit-markup-hw-08/index.html'
                    projectGitLink='https://github.com/Brute1996/goit-markup-hw-08'
                    projectImage={WebStudioImg}
                    projectTitle='WebStudio'
                    projectTechnologies='HTML, SASS, JS'
                    projectDescr='Personal website with a adaptive layout' />
                
                <PortfolioItem
                    projectLink='https://yuliia21bm.github.io/team-project-ice-cream-shop/index.html'
                    projectGitLink='https://github.com/Yuliia21BM/team-project-ice-cream-shop'
                    projectImage={IceCreamImg}
                    projectTitle='Icecream shop'
                    projectTechnologies='HTML, SASS, JS, Parcel'
                    projectDescr='A website with a adaptive layout. Role: Developer.
                    I made gallery and customer reviews sections.
                    Also, I helped my teammates fix problems in their sections.
                    ' />
                
                <PortfolioItem
                    projectLink='https://yuliia21bm.github.io/Filmoteka_team_proj/'
                    projectGitLink='https://github.com/Yuliia21BM/Filmoteka_team_proj'
                    projectImage={FilmotekaImg}
                    projectTitle='Filmoteka'
                    projectTechnologies='HTML, SASS, JS, REST API, AJAX, Parcel'
                    projectDescr='Application for choosing a movie with adaptiv layout. Role: Developer.
                    I made a modal window for movie cards and the "wheel of
                    fortune" button in the header.
                    As well, I helped my teammates to fix problems in their sections.
                    ' />
                
                <PortfolioItem
                    projectLink='https://brute1996.github.io/currency-converter/'
                    projectGitLink='https://github.com/Brute1996/currency-converter'
                    projectImage={CurrencyConverImg}
                    projectTitle='Currency Converter'
                    projectTechnologies='React JS, HTML, STYLED CSS, REST API, AJAX, Material UI'
                    projectDescr='Currency converter based on NBU API.' />
                
                <PortfolioItem
                    projectLink='https://brute1996.github.io/landing/'
                    projectGitLink='https://github.com/Brute1996/landing'
                    projectImage={LandingImg}
                    projectTitle='Landing'
                    projectTechnologies='React JS, HTML, STYLED CSS, Ract router'
                    projectDescr='Landing page with adaptive layout.' />
                
                <PortfolioItem
                    projectLink='https://brute1996.github.io/the-notes-app/'
                    projectGitLink='https://github.com/Brute1996/the-notes-app'
                    projectImage={TheNotesAppImg}
                    projectTitle='The notes app'
                    projectTechnologies='React JS, HTML, STYLED CSS, REST API'
                    projectDescr='App with responsive layout to create, delete, edit notes. Based on QuintaDB REST API.' />
                                
                <PortfolioItem
                    projectLink='#'
                    projectGitLink='#'
                    projectImage={ComingSoonImg}
                    projectTitle='Coming soon'
                    projectTechnologies='soon'
                    projectDescr='I am learn something new every day. A new and interesting project will appear here soon.' />
                
            </PortfolioList>
        </>
    );
};

export default Portfolio;