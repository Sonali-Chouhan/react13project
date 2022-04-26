import {create_post, show_post,delete_post} from "../Type";
import instance from "../../Base/ApiBase";
export const CreatePost = (data) => {
return (dispatch) => {
        
      return instance.post('/posts', {post:data})
          .then(data => {
              dispatch({
                  type:create_post,
                  payload: data
              })
          })
          .catch(error => {
              dispatch({
                  type:"ERROR",
                  payload: error.response
              })
          });
  }

};
export const ShowApi = () =>{
    
    return (dispatch) =>{
        return instance.get('/posts')
        .then (data => {
            dispatch({
                type :show_post,
                payload: data
            })
        })

}};
export const DeletePost=(id)=>{
    return (dispatch) => {
        
        return instance.delete(`/posts/${id}`)
            .then(data => {
                dispatch({
                    type:delete_post,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:"ERROR",
                    payload: error.response
                })
            });
    }

}




    

 