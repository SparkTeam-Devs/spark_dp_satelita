import Button from "../UI/primitives/Button/Button";
import Image from "next/image";
import logoFooter from '@/public/Icons/Footer/LogoFooter.png'
import { FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../UI/svg";
import ButtonLink from "@/src/shared/data/mainPageText";
import Link from "next/link";

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
                    <p className="footer__name-text hidden-tablet">Ai Undresser © 2025. All rights reserved.</p>
                </div>
                <Link href={ButtonLink} className="footer__button visible-tablet">
                    <Button size="medium" >Try it now</Button>
                </Link>
                <ul className="footer__menu">
                    <li className="footer__menu-item"><Link href="#home">Home</Link></li>
                    <li className="footer__menu-item"><Link href="#how-to-works">How to works</Link></li>
                    <li className="footer__menu-item"><Link href="#choose">Why choose us</Link></li>
                    <li className="footer__menu-item"><Link href="#gallery">Gallery us</Link></li>
                    <li className="footer__menu-item"><Link href="#pricing">Pricing Plans</Link></li>
                    <li className="footer__menu-item"><Link href="#reviews">Reviews</Link></li>
                    <li className="footer__menu-item"><Link href="#faq">FAQ</Link></li>
                </ul>
                <Link href={ButtonLink} className="hidden-tablet">
                    <Button size="medium">Try it now</Button>
                </Link>
                <p className="footer__name-text visible-tablet">Ai Undresser © 2025. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer