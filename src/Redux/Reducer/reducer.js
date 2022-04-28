import {sing_Up, sing_In, Errors} from "../Type"
const initialState = {
    List: [],
    Data:[],
    errors:" OOPS :) This Email Already Exists "
  };
  export const reducer = function (state = initialState, action) {
    
    switch (action.type) {
      
      case sing_Up:
      
        return {
          ...state,
          List: action.payload,
          
        };
        case sing_In:
          console.log("v4",action.payload.data.user.id)
          const id=action.payload.data.user.id
          localStorage.setItem("User_Id",id)
          const Token=[action.payload.data.token]
          localStorage.setItem("Token",Token)
          return{
            ...state,
            Data:action.payload,
            id:id
          };
        
        case Errors:
          console.log(state.errors)
         return{
            ...state,
            errors:[state.errors]
          }
        default :
        return state;
    }
}