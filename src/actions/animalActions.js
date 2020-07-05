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
