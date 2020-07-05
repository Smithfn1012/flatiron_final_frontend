export const LOAD_PLANTS = 'LOAD_PLANTS'
export const CHANGE_PLANT = 'CHANGE_PLANT'
export const ADD_PLANT = 'ADD_PLANT'

export const getPlants = () => {
    return (dispatch) => {
      return fetch('https://localhost:3001/api/v1/plants')
        .then(res=>res.json())
        .then(plants => {
          dispatch({
            type: LOAD_PLANTS,
            payload: plants
          })
        })
        .catch(console.error)
    }
}