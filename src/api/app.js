const search = axios => payload =>
  axios
    .get(
      `http://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${payload}&site=stackoverflow`
    )
    .then(({ data }) => ({ response: data }))
    .catch(error => ({ error }));

const questions = axios => payload =>
  axios
    .get(
      `http://api.stackexchange.com/2.2/users/${payload}/questions?order=desc&sort=activity&site=stackoverflow`
    )
    .then(({ data }) => ({ response: data }))
    .catch(error => ({ error }));

const tag = axios => payload =>
  axios
    .get(
      `http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=${payload}&site=stackoverflow`
    )
    .then(({ data }) => ({ response: data }))
    .catch(error => ({ error }));

const answers = axios => payload =>
  axios
    .get(
      `http://api.stackexchange.com/2.2/questions/${payload}/answers?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wzu0T`
    )
    .then(({ data }) => ({ response: data }))
    .catch(error => ({ error }));

export default axios => ({
  search: search(axios),
  questions: questions(axios),
  tag: tag(axios),
  answers: answers(axios)
});
