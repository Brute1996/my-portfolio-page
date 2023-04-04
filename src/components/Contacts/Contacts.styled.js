import styled from "@emotion/styled";

export const ContactsStyled = styled.div`
  text-align: center;

  h2 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 4px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 14px;
  }

  p {
    font-size: 30px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.5);
  }

  .contact-link-mail {
    font-size: 18px;
    display: inline-flex;
    align-items: flex-end;
    gap: 2px;
    color: rgba(0, 0, 0, 0.5);
    transition: scale 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      scale: 1.1;
      color: #000;
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
    color: rgba(0, 0, 0, 0.5);
    scale: 1;
    transition: scale 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
      scale: 1.1;
      color: #000;
    }
  }
`;
