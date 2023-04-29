import styled from "@emotion/styled";

export const MenuBar = styled.div`
  position: fixed;
  width: 100%;
  padding: 15px;
  background-color: ${(p) => p.theme.menuColorBackground};
  z-index: 999;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  color: ${(p) => p.theme.activeColor};
  display: flex;
  font-size: 45px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;
