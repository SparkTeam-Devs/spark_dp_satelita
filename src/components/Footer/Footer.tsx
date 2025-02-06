import Button from "../UI/primitives/Button/Button";
import Image from "next/image";
import logoFooter from '@/public/Icons/Footer/LogoFooter.png'
import { FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../UI/svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__name">
                    <div className="footer__name-logo">
                        <Image src={logoFooter} alt="logo" width={60} height={60} />
                        <p className="footer__name-logo-text">NoCloth</p>
                    </div>
                    <div className="footer__name-social">
                        <div className="footer__name-social-icon icon"><FacebookIcon /></div>
                        <div className="footer__name-social-icon icon"><TelegramIcon /></div>
                        <div className="footer__name-social-icon icon"><TwitterIcon /></div>
                        <div className="footer__name-social-icon icon"><InstagramIcon /></div>
                    </div>
                    <p className="footer__name-text">Ai Undresser © 2025. All rights reserved.</p>
                </div>
                <ul className="footer__menu hidden-mobile">
                    <li className="footer__menu-item">Home</li>
                    <li className="footer__menu-item">How to works</li>
                    <li className="footer__menu-item">Why choose us</li>
                    <li className="footer__menu-item">Gallery us</li>
                    <li className="footer__menu-item">Pricing Plans</li>
                    <li className="footer__menu-item">Reviews</li>
                    <li className="footer__menu-item">FAQ</li>
                </ul>
                <Button size="medium" >Try it now</Button>
            </div>
        </footer>
    )
}

export default Footer