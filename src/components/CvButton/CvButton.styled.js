import styled from "@emotion/styled";

export const CvButtonStyled = styled.div`
  text-align: center;
  gap: 5px;
  font-size: 22px;
  font-weight: 500;
  width: 180px;
  color: #1a1a1a;

  border: 2px solid rgba(0, 0, 0, 1);
  background-color: rgba(243, 142, 27, 0.8);
  border-radius: 10px;
  padding: 6px;
  cursor: pointer;

  &.menu-cv-button {
    display: none;
  }

  @media (min-width: 768px) {
    margin: 0 auto;

    &.menu-cv-button {
      display: block;
    }
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: ${(p) => p.theme.activeColor};
    box-shadow: ${(p) => p.theme.primaryColor} 0 8px 15px;
  }

  &:active {
    box-shadow: none;
  }
`;
