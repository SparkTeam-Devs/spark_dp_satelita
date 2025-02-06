import './Accordion.scss';

interface QuestionProps {
    title?: string;
    info?: string;
}

const Question: React.FC<QuestionProps> = ({title, info}) => {
    return (
        <div className='question'>
			<details className='question__details' name='faq'>
				<summary className='question__summary'>
					<span className='question__title' role='torn' aria-details='faq'>
						{title}
					</span>
				</summary>
			</details>
			<div className='question__content' id='faq' role='defintion'>
				<div className='question__content-body'>
					<p>{info}</p>
				</div>
			</div>
		</div>
    )
}

export default Question