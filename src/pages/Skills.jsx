import { SkillBlock, SkillsWrapper } from "./pages-styles/Skills.styled";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiCss3, DiSass } from "react-icons/di"
import { GoDeviceMobile } from "react-icons/go"
import { SiBem, SiJavascript, SiRedux, SiAxios, SiJson, SiWebpack, SiStyledcomponents, SiReactrouter } from "react-icons/si"
import {FaReact, FaFigma, FaNpm, FaServer} from "react-icons/fa"

const Skills = () => {
    return (
        <>
        <SkillsWrapper>
            <SkillBlock>
                <h2 className="skills-title">Front-end:</h2>
                <ul>
                    <li><AiFillHtml5 />HTML</li>
                    <li><DiCss3 />CSS</li>
                        <li><DiSass />sass/SCSS</li>
                        <li><SiStyledcomponents />Styled CSS</li>
                    <li><GoDeviceMobile />Responsive design</li>
                    <li><GoDeviceMobile />Adaptive design</li>
                    <li><SiBem />BEM Methodology</li>
                    <li><SiJavascript />JavaScript</li>
                    <li><FaReact />React</li>
                        <li><SiRedux />Redux</li>
                        <li><SiReactrouter />React Router</li>
                        
                </ul>
            </SkillBlock>
            <SkillBlock>
                <h2 className="skills-title">Other:</h2>
                <ul>
                    <li><AiFillGithub />Git</li>
                    <li><FaFigma />Figma</li>
                    <li><FaNpm />npm</li>
                    <li><SiAxios />Axios</li>
                    <li><SiJson />JSON</li>
                    <li><FaServer />REST API</li>
                    <li><SiWebpack />Webpack/Parcel</li>
                </ul></SkillBlock>
        </SkillsWrapper></>
    );
};

export default Skills;