import styled from "@emotion/styled";
import SerhiiPhoto from "../../img/serhii-min.jpg";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;

  @media (min-width: 1600px) {
    flex-direction: row;
  }
`;

export const Photo = styled.div`
  display: flex;
  min-width: 280px;
  height: 280px;
  border: 10px solid rgba(0, 0, 0, 0.15);
  background-color: rgba(61, 153, 112, 0.35);
  background-image: url(${SerhiiPhoto});
  background-repeat: no-repeat;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background-position: center;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.5);
  animation: morphing 15s infinite;
  overflow: hidden;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1200px) {
    width: 380px;
    height: 380px;
  }
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.5);
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.5);
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
  }
`;

export const HomeInfo = styled.div`
  text-align: center;
  max-width: 900px;
  color: ${(p) => p.theme.activeColor};

  p {
    font-size: 23px;

    @media (min-width: 1200px) {
      font-size: 30px;
    }
  }
`;

export const HomeTitle = styled.h2`
  letter-spacing: 4px;
  margin-bottom: 20px;
  font-size: 36px;

  @media (min-width: 768px) {
    font-size: 60px;
  }
`;
