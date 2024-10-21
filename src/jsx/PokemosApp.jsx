import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";


const PokemonApp = () => {
    const { page, pokemons, isLoading } = useSelector( state => state.pokemon );

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    },[]);

    return(
        <>

            <h1>{isLoading ? 'Cargando...' : 'Pokemon app'}</h1>
            <hr />

            <ul>
                {pokemons && pokemons.map((data, index)=>(
                    <li key={ index } >{ data.name }</li>
                ))}
            </ul>

            <button
                onClick={ () => dispatch(getPokemons(page)) }
                disabled={ isLoading }
            >
                Next
            </button>
        
        </>
    )
}

export { PokemonApp }