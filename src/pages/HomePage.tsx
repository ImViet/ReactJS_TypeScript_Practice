import { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { PageTitle } from "../components/PageTitle";
import {
  getUnansweredQuestions,
  QuestionData,
} from "../interfaces/QuestionData";
import { QuestionList } from "../components/QuestionList";

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  const doGetUnansweredQuestions = async () => {
    const unanswerQuestions = await getUnansweredQuestions();
    setQuestions(unanswerQuestions);
    setQuestionsLoading(false);
  };

  useEffect(() => {
    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    console.log("Move to the AskPage");
  };
  return (
    <Page>
      <div>
        <div>
          <PageTitle>Unanswered Questions</PageTitle>
          <button onClick={handleAskQuestionClick}>Ask a question</button>
        </div>
        {questionsLoading ? (
          <div>Loading...</div>
        ) : (
          <QuestionList
            data={questions || []}
            // renderItem={(question) => <div>{question.title}</div>}
          />
        )}
      </div>
    </Page>
  );
};
