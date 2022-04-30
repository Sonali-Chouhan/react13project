import {
  create_post,
  user_List,
  delete_post,
  update_post,
  user_post,
} from "../Type";
import instance from "../../Base/ApiBase";

export const CreatePost = (data) => {
  return (dispatch) => {
    return instance
      .post("/posts", { post: data })
      .then((data) => {
        dispatch({
          type: create_post,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error.response,
        });
      });
  };
};

export const PostList = () => {
  return (dispatch) => {
    return instance
      .get("/posts")
      .then((data) => {
        dispatch({
          type: user_List,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error.response,
        });
      });
  };
};

export const DeletePost = (id) => {
  return (dispatch) => {
    return instance
      .delete(`/posts/${id}`)
      .then((data) => {
        dispatch({
          type: delete_post,
          payload: data,
        });
      })
    
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error.response,
        });
      });
  };
};

export const ShowPost = (id) => {
  return (dispatch) => {
    return instance
      .get(`/posts/${id}`)
      .then((data) => {
        dispatch({
          type: user_post,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error.response,
        });
      });
  };
};

export const UpdatePost = (id, data) => {
  
  console.log("id", id);
  console.log("data", data);
  return (dispatch) => {
    return instance
      .put(`/posts/${id}`, { posts: data })
      .then((data) => {
        dispatch({
          type: update_post,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error.response,
        });
      });
  };
};
