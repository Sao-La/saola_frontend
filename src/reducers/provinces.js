export const provincesReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_PROVINCES":
      return action.payload;
    case "RESET_PROVINCES":
      return null;
    default:
      return state;
  }
};

export default provincesReducer;