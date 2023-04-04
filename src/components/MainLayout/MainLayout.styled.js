import styled from "@emotion/styled";

export const MainLayoutStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HeaderStyled = styled.header`
  .menu-clone {
    width: inherit;
    height: 75px;
    width: 100%;
    visibility: hidden;

    @media (min-width: 768px) {
      width: 336px;
    }
  }
`;

export const MenuBar = styled.div`
  position: fixed;
  width: 100%;
  padding: 15px;
  background-color: rgb(61, 153, 112);
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  margin-left: auto;
  font-size: 45px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

export const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(-110%);
  transition: transform 500ms ease-in-out;
  background-color: rgb(61, 153, 112);
  padding: 50px 25px;

  &.active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    position: fixed;
    transform: translateY(0);
    width: auto;
  }

  .cv-download-button {
    text-align: center;
    gap: 5px;
    font-size: 22px;
    font-weight: 500;
    width: 200px;
    margin-top: 30px;
    color: #1a1a1a;
    margin: 0 auto;

    border: 2px solid rgba(0, 0, 0, 1);
    background-color: rgba(243, 142, 27, 0.8);
    border-radius: 10px;
    padding: 6px;

    &:disabled {
      pointer-events: none;
    }

    &:hover {
      color: rgba(243, 142, 27, 0.8);
      background-color: #1a1a1a;
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;

  font-size: 40px;
  font-weight: 500;
  letter-spacing: 4px;
  color: rgba(0, 0, 0, 0.6);

  .navigation-link {
    display: flex;
    align-items: center;
    gap: 6px;
    scale: 1;
    transition: scale 300ms ease-in-out;
    &:hover {
      scale: 1.1;
    }
  }

  .active {
    color: black;
  }
`;

export const MainStyled = styled.main`
  height: 100vh;
  margin: auto;
  display: flex;
`;
