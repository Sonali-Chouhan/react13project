import { create_post, user_List, delete_post,user_post } from "../Type";
const initialState = {
  User: [],
};
export const Authreducer = function (state = initialState, action) {
  console.log("hhh", action);

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
      console.log("nnn",action.payload.data.message)
      const message=action.payload.data.message
      return {
        ...state,
        User:action.payload,
        message:message

      };

    case user_post:
      console.log("s1",action.payload)
      return {
        ...state,
        User:state.User,
        isShow:action.payload
      };
      
    default:
      return state;
  }
};
