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
export const changePlant = (plant) => {
    return {
      type: CHANGE_PLANT,
      payload: plant
    }
}
export const addPlant = (plant) => {
    return (dispatch) => {
      return fetch('https://localhost:3001/api/v1/plants', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          species: plant.species,
          size: plant.size,
          seed_distribution: plant.seed_distribution,
          predators: plant.predators,
          location: plant.location,
          other_info: plant.other_info,
          image: plant.image,
          biome_id: plant.biome_id
        })
      })
        .then(res=>res.json())
        .then(plant => {
          dispatch({
            type: ADD_PLANT,
            payload: plant
          })
        })
        .catch(console.error)
    }
}
  