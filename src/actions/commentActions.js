export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const ADD_COMMENT_ANIMAL = 'ADD_COMMENT_ANIMAL';
export const ADD_COMMENT_PLANT ='ADD_COMMENT_PLANT'

export const getComments = () => {
    return dispatch => {
      return fetch('http://localhost:3001/comments')
      .then(res=>res.json())
      .then(comments => {
        dispatch({
          type: LOAD_COMMENTS,
          payload: comments
        })
      }).catch(console.error)
    }
}

let animalPics = ['https://www.thoughtco.com/thmb/MVaqDmyhPWEIu9ODLskqdieLhk8=/1873x1405/smart/filters:no_upscale()/arctic-fox-468029675-5b3247a0c9e77c001a4df47a.jpg', 'https://cdna.artstation.com/p/assets/images/images/017/921/734/large/katerina-bakina-.jpg?1557856423', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kunawodna3.JPG/1200px-Kunawodna3.JPG', 'https://www.nationalgeographic.com/content/dam/news/2016/03/04/grizzly_delisting/01grizzlydelisting.jpg']

let randomAnimal = animalPics[Math.floor(Math.random() * animalPics.length)]

export const addCommentAnimal = (comment) => {
    return dispatch => {
      return fetch(`http://localhost:3001/animals/${comment.animal_id}/comments`, {
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

let plantPics = ['./images/profile-heliconia.jpg', './images/profile-mapletree.jpg', './images/profile-orchid.jpg']

let randomPlant = plantPics[Math.floor(Math.random() * plantPics.length)]

export const addCommentPlant = (comment) => {
    return dispatch => {
      return fetch(`http://localhost:3001/plants/${comment.plant_id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: comment.name,
          comment: comment.comment,
          animal_id: null,
          plant_id: comment.plant_id,
          animal_img: randomPlant
        })
      }).then(res=>res.json())
        .then(comment=>{
          dispatch({
            type: ADD_COMMENT_PLANT,
            payload: comment
          })
        }).catch(console.error)
    }
}