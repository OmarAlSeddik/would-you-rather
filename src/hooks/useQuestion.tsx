import { useSelector } from "react-redux";
import { RootState } from "../store";

const useQuestion = (questionId: string) => {
  const questions = useSelector((state: RootState) => state.questions);
  const question = questions.find(
    (question: any) => question.id === questionId
  );

  return question;
};

export default useQuestion;
