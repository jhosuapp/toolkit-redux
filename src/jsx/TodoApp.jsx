import { useDispatch, useSelector } from "react-redux";
import { useGetTodosQuery } from "./store/api";


const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery();

    const dispatch = useDispatch();

    return(
        <>

            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>{isLoading ? 'Loading...' : 'Show data'}</h4>

            <ul>
                { todos.map(({ id, title, completed })=>(
                    <li key={ id }>
                        <strong>{completed ? 'Done' : 'Pending'}</strong>{title}
                    </li>
                )) }
            </ul>


            <button>Next todo</button>
        </>
    )
}

export { TodoApp }