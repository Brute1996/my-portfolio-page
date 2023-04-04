import { HomeInfo, HomeWrapper, Photo } from './pages-styles/Home.styled';

const Home = () => {
    return (
        <HomeWrapper>
            <Photo />
            <HomeInfo>
                <h2>Serhii Cherenkov</h2>
                <p>
                    <span style={{ display: 'block' }}>Greetings all on my page! 👋</span>
                    I am a junior Front-end Developer and I passionate about creating beautiful user-friendly apps 🤓<br/>
                    Here you can find a little bit information about my skills and see my portfolio 😊
                </p>
            </HomeInfo>
        </HomeWrapper>
    );
};

export default Home;