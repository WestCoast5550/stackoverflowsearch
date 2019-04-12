const search = axios => payload =>
  axios
    .get(
      `http://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${payload}&site=stackoverflow`
    )
    .then(({ data }) => ({ response: data }))
    .catch(error => ({ error }));

export default axios => ({
  search: search(axios)
});
