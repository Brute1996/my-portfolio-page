import styled from "@emotion/styled";

export const SkillsWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: auto;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 100px;
  }
`;

export const SkillBlock = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: ${(p) => p.theme.menuColorBackground};
  transition: background-color 350ms ease-in-out;
  color: ${(p) => p.theme.activeColor};

  @media (min-width: 1600px) {
    min-width: 500px;
  }

  .skills-title {
    display: flex;
    justify-content: center;
    font-size: 38px;
    letter-spacing: 4px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 56px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      font-size: 36px;
    }
  }
`;
