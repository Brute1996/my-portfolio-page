import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { ContactsStyled } from "./Contacts.styled";

export const Contacts = () => {
    return (
        <ContactsStyled>
            <h2>Contacts</h2>
            <p>You can find me here:</p>
            <Link className="contact-link-mail" to='mailto:sergey.cherenkov96@gmail.com'><AiOutlineMail />sergey.cherenkov96@gmail.com</Link>
            <ul className="contacts-list">
                <li className="contact-item">
                    <Link
                        className="contact-link"
                        rel="noopener noreferrer"
                        target="_blank"
                        to='https://github.com/Brute1996'><BsGithub /></Link></li>
                <li className="contact-item">
                    <Link
                        className="contact-link"
                        rel="noopener noreferrer"
                        target="_blank"
                        to='https://t.me/serhii_chss'
                    ><BsTelegram /></Link></li>
                <li className="contact-item">
                    <Link
                        className="contact-link"
                        rel="noopener noreferrer"
                        target="_blank"
                        to='https://www.linkedin.com/in/serhii-cherenkov-bb0397229'><BsLinkedin /></Link></li>
            </ul>
        </ContactsStyled>
    );
};