import { sing_Up, sing_In, Errors } from "../Type";
const initialState = {
  List: [],
  Data: [],
  // errors: " OOPS :) This Email Already Exists ",
};
export const reducer = function (state = initialState, action) {
  console.log("reducer1-action",action)
  switch (action.type) {
    case sing_Up:
      const Token1 = [action.payload.data.token];
      localStorage.setItem("Token1", Token1);
      
      return {
        ...state,
        List: action.payload,
       
      };

    case sing_In:
      console.log("v4", action.payload.data.user.id);
      const id = action.payload.data.user.id;
      localStorage.setItem("User_Id", id);
      const Token = [action.payload.data.token];
      localStorage.setItem("Token", Token);
      const mess=action.payload.data.message
      return {
        ...state,
        Data: action.payload,
        message:mess
      };

    case Errors:
     
      return {
        ...state,
        
        errors:action.payload
      };
      
    default:
      return state;
  }
};
