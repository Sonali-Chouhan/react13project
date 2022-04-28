import { create_post, show_List, delete_post,show_post,edit_post } from "../Type";
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
    case show_List:
     
      return {
        ...state,
        User: action.payload,
      };
    case delete_post:
      return {
        ...state,
        User:action.payload,

      };
    case show_post:
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
