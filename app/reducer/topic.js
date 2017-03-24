const reducer = (state = {
  fetching: false,
  fetched: false,
  error: null,
  topics: []
}, action) => {
  switch (action.type) {
    case 'FETCH_TOPIC':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_TOPIC_FULFILLED':
      return {
        ...state,
        fetched: true,
        fetching: false,
        topics: action.payload
      };
    case 'FETCH_TOPIC_REJECTED':
      return {
        ...state,
        error: action.payload,
        fetched: false
      };
    default:
      return state;
  }
};

export default reducer;
