import styled from "@emotion/styled";

export const PortfolioList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
  margin: auto;

  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PortfolioCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  text-align: center;
  max-width: 400px;

  border-radius: 10px;
  background-color: ${(p) => p.theme.menuColorBackground};
  transition: background-color 350ms ease-in-out;
  color: ${(p) => p.theme.activeColor};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  &:last-child {
    .portfolio-link {
      pointer-events: none;
      .visit-text {
        display: none;
      }
    }
    .project-git-link {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    position: relative;
    max-width: 1000px;
    min-height: 300px;
    flex-direction: row;
    text-align: start;
    align-items: normal;
    gap: 50px;
  }

  .portfolio-link {
    transition: scale 300ms ease-in-out;
    margin-bottom: 30px;

    &:hover {
      scale: 1.05;
    }

    @media (min-width: 1200px) {
      margin-bottom: 0;
    }

    .visit-text {
      margin-top: 10px;
      text-align: center;

      font-size: 24px;
      letter-spacing: 4px;
    }

    .portfolio-img {
      width: 250px;
      height: 200px;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 15px;
      border: 3px solid white;
    }
  }

  .project-text {
    @media (min-width: 1200px) {
      width: 500px;
    }

    .project-card-title {
      font-size: 34px;
      margin-bottom: 16px;
      letter-spacing: 2px;
    }

    .project-card-technologies {
      font-size: 20px;
      margin-bottom: 8px;
    }

    .project-card-description {
      font-size: 25px;
    }
  }

  .project-git-link {
    gap: 5px;
    font-size: 22px;
    font-weight: 500;

    margin-top: 30px;

    border: 2px solid ${(p) => p.theme.activeColor};
    border-radius: 10px;
    padding: 6px;

    &:disabled {
      pointer-events: none;
    }

    &:hover {
      color: #fff;
      background-color: ${(p) => p.theme.activeColor};
      box-shadow: ${(p) => p.theme.activeColor} 0 8px 15px;
    }

    &:active {
      box-shadow: none;
    }

    @media (min-width: 1200px) {
      position: absolute;
      top: 0;
      right: 5%;
    }
  }
`;
