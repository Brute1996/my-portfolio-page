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

export const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateY(-100%);
  transition: transform 500ms ease-in-out;
  background-color: rgb(61, 153, 112);
  padding: 50px 15px;

  &.active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    position: fixed;
    transform: translateY(0);
    width: auto;
    box-shadow: 1px 1px 15px #000;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;

  font-size: 28px;
  font-weight: 500;
  letter-spacing: 4px;
  color: rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    font-size: 40px;
    gap: 36px;
  }

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
