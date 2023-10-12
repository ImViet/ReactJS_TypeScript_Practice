import { getUnansweredQuestions } from "./QuestionData";
import { QuestionList } from "./QuestionList";

export const HomePage = () => (
  <div>
    <div>
      <h2>Unanswered Questions</h2>
      <button>Ask a question</button>
    </div>
    <QuestionList data={getUnansweredQuestions()} />
  </div>
);
