//Redux
import { useDispatch, useSelector } from 'react-redux';
//Slices
import { increment, decrement, incrementBy } from './store/slices/counter';
//Logo react
import reactLogo from '../assets/react.svg';

const App = ()=> {
    const { counter } = useSelector( state => state.counter );
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>count is { counter }</h1>
            <div className="card">
                <button onClick={ ()=>{ dispatch(increment()) }  }>
                    Increment
                </button>
                <button onClick={ ()=>{ dispatch(decrement()) }  }>
                    Decrement
                </button>
                <button onClick={ ()=>{ dispatch(incrementBy(2)) }  }>
                    Increment by 2
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export { App }
