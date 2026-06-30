import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers.jsx";

export default function Question({ questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkip }) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkip}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
