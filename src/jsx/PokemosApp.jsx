import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";


const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    },[]);

    return(
        <>

            <h1>Pokemon app</h1>
            <hr />

            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        
        </>
    )
}

export { PokemonApp }