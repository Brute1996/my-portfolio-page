import { PortfolioItem } from "../components/PortfolioItem/PortfolioItem";
import { PortfolioList } from "./pages-styles/Portfolio.styled";
import WebStudioImg from '../img/web-studio-project.JPG'
import IceCreamImg from '../img/Ice-cream-project.JPG'
import FilmotekaImg from '../img/filmoteka-project.JPG'
import CurrencyConverImg from '../img/currency-converter-project.JPG'
import ComingSoonImg from '../img/coming-soon.jpg'


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
                    projectDescr='Personal website with a responsive layout' />
                
                <PortfolioItem
                    projectLink='https://yuliia21bm.github.io/team-project-ice-cream-shop/index.html'
                    projectGitLink='https://github.com/Yuliia21BM/team-project-ice-cream-shop'
                    projectImage={IceCreamImg}
                    projectTitle='Icecream shop'
                    projectTechnologies='HTML, SASS, JS, Parcel'
                    projectDescr='A website with a responsive design. Role: Developer.
                    I made gallery and customer reviews sections.
                    Also, I helped my teammates fix problems in their sections.
                    ' />
                
                <PortfolioItem
                    projectLink='https://yuliia21bm.github.io/Filmoteka_team_proj/'
                    projectGitLink='https://github.com/Yuliia21BM/Filmoteka_team_proj'
                    projectImage={FilmotekaImg}
                    projectTitle='Filmoteka'
                    projectTechnologies='HTML, SASS, JS, REST API, AJAX, Parcel'
                    projectDescr='Application for choosing a movie. Role: Developer.
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
                    projectLink=''
                    projectGitLink=''
                    projectImage={ComingSoonImg}
                    projectTitle='Coming soon'
                    projectTechnologies='soon'
                    projectDescr='I am learn something new every day. A new and interesting project will appear here soon.' />
                
            </PortfolioList>
        </>
    );
};

export default Portfolio;