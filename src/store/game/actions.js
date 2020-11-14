import types from './types';

const saveQuestions = (questions) => ({
  type: types.SAVE_QUESTIONS,
  payload: questions
})

const loadingQuestions = (isLoading) => ({
  type: types.LOADING_QUESTIONS,
  payload: isLoading
})

export default {
  saveQuestions,
  loadingQuestions
}