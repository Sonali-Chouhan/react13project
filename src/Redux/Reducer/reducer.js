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
        case sing_In:{
          
          return{
            ...state,
            Data:action.payload
          };
        }
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