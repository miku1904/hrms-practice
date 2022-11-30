import { USER } from "../actiontype/UserActionType";

let initialState = {
  username: "",
  password: "",
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;