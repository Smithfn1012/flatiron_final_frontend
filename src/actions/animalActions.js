export const LOAD_ANIMALS = 'LOAD_ANIMALS'
export const CHANGE_ANIMAL = 'CHANGE_ANIMAL'
export const ADD_ANIMAL = 'ADD_ANIMAL'

export const getAnimals = () => {
    return (dispatch) => {
        return fetch('https://localhost:3001/api/v1/animals')
        .then(res => resp.json())
        .then(animals => {
            dispatch({
                type: LOAD_ANIMALS,
                payload: animals
            })
        }).catch(console.error)
    }
}
export const changeAnimal = (animal) => {
    return {
        type: CHANGE_ANIMAL,
        payload: animal
    }
}
export const addAnimal = (animal) => {
    return (dispatch) => {
        return fetch('https://localhost:3001/api/v1/animals', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                species: animal.species,
                lifespan: animal.lifespan,
                size: animal.size,
                prey: animal.prey,
                predators: animal.predators,
                location: animal.predators,
                other_info: animal.other_info,
                image: animal.image,
                endangered: animal.endangered,
                biome_id: animal.biome_id
            })
        }).then(res => res.json())
          .then(animal => {
              dispatch({
                  type: ADD_ANIMAL,
                  payload: animal
              })
          }).catch(console.error)
    }
}
