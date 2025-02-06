import './StyledHeading.scss';

interface StyledHeadingProps {
    children?: React.ReactNode
}

const StyledHeading: React.FC<StyledHeadingProps> = ({children = ''}) => {
    return (
        <div className="styled-heading"><p className='styled-heading__text'>{children}</p></div>
    )
}

export default StyledHeading 