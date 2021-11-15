const initialState = {
	name: '',
	avt: '',
}

export const authReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
				name: action.payload.name,
				avt: action.payload.avt,
			}
    case "RESET_AUTH":
      return {
				name: '',
				avt: '',
			}
    default:
      return state;
  }
};

export default authReducer;