export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const ADD_COMMENT_ANIMAL = 'ADD_COMMENT_ANIMAL';
export const ADD_COMMENT_PLANT ='ADD_COMMENT_PLANT'

export const getComments = () => {
    return dispatch => {
      return fetch('https://localhost:3001/api/v1/comments')
      .then(res=>res.json())
      .then(comments => {
        dispatch({
          type: LOAD_COMMENTS,
          payload: comments
        })
      }).catch(console.error)
    }
}

let animalPics = ['./images/profile-arctic-fox.jpg', './images/profile-dumbo.jpg', './images/profile-emink.jpg', './images/profile-grizzlybear.jpg']