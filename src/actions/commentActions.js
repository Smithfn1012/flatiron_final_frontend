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

let randomAnimal = animalPics[Math.floor(Math.random() * animalPics.length)]

export const addCommentAnimal = (comment) => {
    return dispatch => {
      return fetch(`https://localhost:3001/api/v1/animals/${comment.animal_id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: comment.name,
          comment: comment.comment,
          animal_id: comment.animal_id,
          plant_id: null,
          animal_img: randomAnimal
        })
      }).then(res=>res.json())
        .then(comment=>{
          dispatch({
            type: ADD_COMMENT_ANIMAL,
            payload: comment
          })
        }).catch(console.error)
    }
  }