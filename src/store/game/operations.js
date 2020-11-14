import axios from 'axios';
import actions from './actions';

export const fetchQuestions = () => dispatch => {
  // dispatch(actions.loadingQuestions(true))
  axios('https://ajax.test-danit.com/api/swapi/films/')
    .then(res => {
      dispatch(actions.saveQuestions(res.data))
      // dispatch(actions.loadingQuestions(false))
    })
}

export default {
  fetchQuestions
}