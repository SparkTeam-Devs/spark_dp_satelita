import Link from 'next/link';
import './Button.scss';

interface ButtonProps {
    variant?: 'default' | 'main' | 'price';
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'main';
    disableIcons?: boolean;
    iconSvg?: React.ReactNode;
    children?: React.ReactNode;
    href?: string;
}

const ButtonContent: React.FC<ButtonProps> = ({children, disableIcons = false, variant='default', size='small', color='default', iconSvg, ...props}) => {
    if (variant === 'default') {
    return (
        <button {...props} className={`button button--variant-${variant} button--size-${size} button--color-${color}`}>
            <div>{children}</div>
            {!disableIcons && <div className="button__icon icon">{iconSvg || ''}</div>}
        </button>
    )}
}

ButtonContent.displayName = 'ButtonContent';

const Button = (props:ButtonProps) => {
    if (props.href) {
        return (
            <Link className="button" href={props.href}><ButtonContent {...props} /></Link>
        )
    }
    return (
        <ButtonContent {...props}/>
    )
}

export default Button