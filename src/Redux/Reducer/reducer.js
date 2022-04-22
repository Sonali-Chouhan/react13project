import {sing_Up, sing_In, Errors} from "../Type"
const initialState = {
    List: [],
    Data:[],
    errors:"Invalid Email And Password"
  };
  export const reducer = function (state = initialState, action) {
    console.log("action",action)
  
    switch (action.type) {
      
      case sing_Up:
      
        return {
          ...state,
          List: action.payload,
          
        };
        case sing_In:
          console.log("v1",action.payload)
          console.log("v2",action.payload.data)
          const Token=[action.payload.data.token]
          localStorage.setItem("Token",Token)
          return{
            ...state,
            Data:action.payload
          };
        
        case Errors:
          debugger
          return{
            ...state,
            errors:[state.errors]
          }
        default :
        return state;
    }
}