import Image from "next/image"
import LogoIcon from "../../../public/Icons/Header/LogoIcon.png"
import Button from "../UI/primitives/Button/Button"
import Link from "next/link"
import ButtonLink from "@/src/shared/data/mainPageText"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo"><Image src={LogoIcon} alt="logo" width={40} height={40} /><p className="header__logo-text">NoCloth</p></div>
            <ul className="header__menu hidden-mobile">
                <li className="header__menu-item"><Link href="#home">Home</Link></li>
                <li className="header__menu-item"><Link href="#how-to-works">How to works</Link></li>
                <li className="header__menu-item"><Link href="#choose">Why choose us</Link></li>
                <li className="header__menu-item"><Link href="#gallery">Gallery us</Link></li>
                <li className="header__menu-item"><Link href="#pricing">Pricing Plans</Link></li>
                <li className="header__menu-item"><Link href="#reviews">Reviews</Link></li>
                <li className="header__menu-item"><Link href="#faq">FAQ</Link></li>
            </ul>
            <Link href={ButtonLink} className="header__button">
                <Button >Try it now</Button>
            </Link>
        </header>
    )
}

export default Header