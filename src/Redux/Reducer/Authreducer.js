import {create_post, show_post} from "../Type";
const initialState = {
    User: [],
    Item:[]
    
  };
  export const Authreducer = function (state = initialState, action) {
    console.log("action",action)
  
    switch (action.type) {
      
      case create_post :
          // console.log("c1",action.payload)
          // console.log("c2",action.payload.data)
          // console.log("c3",action.payload.data.post)
          // console.log("c4",action.payload.data.post.id)
          // const id=action.payload.data.post.id
        return {
          ...state,
          User: action.payload,
          
          
        };
      case show_post:
        console.log("g1",action.payload.data.posts)
        const obj=action.payload.data.posts

        return{
          ...state,
          Item:action.payload,
          Isshow:obj
        }
        default :
        return state;
    }
  }