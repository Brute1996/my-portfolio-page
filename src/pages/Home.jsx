import { HomeInfo, HomeTitle, HomeWrapper, Photo } from './pages-styles/Home.styled';

const Home = () => {
    return (
        <HomeWrapper>
            <Photo />
            <HomeInfo>
                <HomeTitle>Serhii Cherenkov</HomeTitle>
                <p>
                    <span style={{ display: 'block' }}>Greetings all on my page! 👋</span>
                    I am a junior Front-end Developer and I am passionate about creating beautiful user-friendly apps 🤓<br/>
                    Here you can find a little bit of information about my skills and see my portfolio 😊
                </p>
            </HomeInfo>
        </HomeWrapper>
    );
};

export default Home;