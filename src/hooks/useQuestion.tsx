// redux imports //
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

// This hook receives a question's id as an argument and returns the respective question's data object from the database. //
