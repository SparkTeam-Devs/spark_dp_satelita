import Question from "./Question";
import QuestionMain from "@/src/shared/data/QuestionDate";


const Accordion = () => {
    return (
        <>
            {QuestionMain.map((item, index) => {
                return <Question key={index} title={item.title} info={item.text}/>
            })}
        </>
    )
}

export default Accordion