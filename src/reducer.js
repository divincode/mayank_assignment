export const initialState = {
  query: null
};


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    
    case "SET_QUERY":
      return {
        ...state,
        query: action.query
      }

    default:
      return state;
  }
};

export default reducer;