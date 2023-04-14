import styled from "@emotion/styled";

export const ContactsStyled = styled.div`
  text-align: center;

  h2 {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 4px;
    color: ${(p) => p.theme.activeColor};
    margin-bottom: 14px;

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 20px;
    margin-bottom: 10px;
    color: ${(p) => p.theme.primaryColor};
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }

  .contact-link-mail {
    font-size: 18px;
    display: inline-flex;
    align-items: flex-end;
    gap: 2px;
    color: ${(p) => p.theme.primaryColor};
    transition: scale 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      scale: 1.1;
      color: ${(p) => p.theme.activeColor};
    }
  }

  .contacts-list {
    display: flex;
    justify-content: center;
    gap: 25px;
    font-size: 35px;
    margin-top: 20px;
  }

  .contact-link {
    display: flex;
    color: ${(p) => p.theme.primaryColor};
    scale: 1;
    transition: scale 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
      scale: 1.1;
      color: ${(p) => p.theme.activeColor};
    }
  }
`;
