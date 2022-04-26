import { sing_Up ,sing_In,Errors} from "../Type";
import instance from "../../Base/ApiBase";

export const singUp = (data) => {
  
//   instance.post('/signup',data)
//       .then( userdata => 
//           dispatch({
//               type: sing_Data,
//               payload: userdata
//           })
//       )
//       .catch( error => {
//           console.log(error);
//       });
      return (dispatch) => {
        return instance.post('/signup', {user:data})
            .then(data => {
                dispatch({
                    type:sing_Up,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:Errors,
                    payload: error.response
                })
            });
    }

};
export const singIn = (data) => {
  
  
          return (dispatch) => {
            return instance.post('/signin', {user:data})
                .then(data => {
                    dispatch({
                        type:sing_In,
                        payload: data
                    })
                })
                .catch(error => {
                    dispatch({
                        type:Errors,
                        payload: error.response
                    })
                });
        }
    
    };
    
