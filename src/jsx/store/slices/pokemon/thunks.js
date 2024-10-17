import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../../api/pokemonApi";

const getPokemons = (page = 0) => {
    return async ( dispatch, getState ) => {
        dispatch(startLoadingPokemons());

        const { data } = await pokemonApi.get(`?offset=${page * 10}&limit=${10},`);

        dispatch(setPokemons({
            page: page + 1,
            pokemons: data.results
        }));
    }
}

export { getPokemons }