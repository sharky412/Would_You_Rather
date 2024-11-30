export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}
