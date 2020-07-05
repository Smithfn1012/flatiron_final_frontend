export const LOAD_BIOMES = "LOAD_BIOMES";
export const CHANGE_BIOME = "CHANGE_BIOME";
export const START_ADDING_BIOMES = "START_ADDING_BIOMES";

export const getBiomes = () => {
    return dispatch => {
        dispatch({
            type: START_ADDING_BIOMES
        });
        return fetch("http://localhost:3001/biomes")
        .then(res => res.json())
        .then(biomes => {
            dispatch({
                type: LOAD_BIOMES,
                payload: biomes
            });
        })
        .catch(console.error);
    };
};
export const displayBiome = biome => {
    return {
        type: CHANGE_BIOME,
        payload: biome
    };
};