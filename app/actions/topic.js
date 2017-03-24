import axios from 'axios';

const fetchTopic = () => (dispatch) => {
  dispatch({ type: 'FETCH_TOPIC', paload: [] });
  axios({
    method: 'GET',
    url: 'https://cnodejs.org/api/v1/topics',
    params: {
      tab: 'all',
      limit: 20,
      page: 2
    }
  })
    .then(res => dispatch({ type: 'FETCH_TOPIC_FULFILLED', payload: res.data.data }))
    .catch(err => dispatch({ type: 'FETCH_TOPIC_REJECTED', payload: err }));
};

export default fetchTopic;
