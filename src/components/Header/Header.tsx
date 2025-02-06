import Image from "next/image"
import LogoIcon from "../../../public/Icons/Header/LogoIcon.png"
import Button from "../UI/primitives/Button/Button"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo"><Image src={LogoIcon} alt="logo" width={40} height={40} /><p className="header__logo-text">NoCloth</p></div>
            <ul className="header__menu hidden-mobile">
                <li className="header__menu-item">Home</li>
                <li className="header__menu-item">How to works</li>
                <li className="header__menu-item">Why choose us</li>
                <li className="header__menu-item">Gallery us</li>
                <li className="header__menu-item">Pricing Plans</li>
                <li className="header__menu-item">Reviews</li>
                <li className="header__menu-item">FAQ</li>
            </ul>
            <Button >Try it now</Button>
        </header>
    )
}

export default Header