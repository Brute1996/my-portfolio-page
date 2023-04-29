import styled from "@emotion/styled";

export const ThemeButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  color: #c9c604;
  font-size: 30px;
  border-radius: 50%;
  border: none;
  padding: 10px;
  box-shadow: 1px 1px 5px black;

  transition: scale 300ms ease-in-out;

  @media (min-width: 768px) {
    position: fixed;
    top: 2%;
    left: 255px;
  }

  &:hover {
    scale: 1.1;
  }
`;
