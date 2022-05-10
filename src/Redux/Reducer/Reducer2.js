import { create_post, user_List, delete_post, user_post, update_post } from "../Type";
const initialState = {
  User: [],
};
export const Authreducer = function (state = initialState, action) {
  console.log("reducer2_action", action);

  switch (action.type) {
    case create_post:

      return {
        ...state,
        User: action.payload,
      };

    case user_List:

      return {
        ...state,
        User: action.payload,
      };

    case delete_post:

      const message = action.payload.data.message;
      return {
        ...state,
        User: action.payload,
        message: message,
      };

    case user_post:
       return {
        ...state,
        User:action.payload,
        // isShow: action.payload
      };
    case update_post:
      return{
        ...state,
        User:action.payload
      }

    default:
      return state;
  }
};
