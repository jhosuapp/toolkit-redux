import { useGetTodosQuery, useGetTodoQuery } from "./store/api";
import { useState } from "react";


const TodoApp = () => {
    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const handlePrevTodo = () => {
        if(todoId === 1) return;
        setTodoId(todoId - 1)
    }

    const handleNextTodo = () => {
        setTodoId(todoId + 1)
    }

    return(
        <>

            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>{isLoading ? 'Loading...' : 'Show data'}</h4>

            <pre>
                {
                    JSON.stringify(todo)
                }
            </pre>

            {/* <ul>
                { todos.map(({ id, title, completed })=>(
                    <li key={ id }>
                        <strong>{completed ? 'Done' : 'Pending'}</strong>{title}
                    </li>
                )) }
            </ul> */}


            <button onClick={ handlePrevTodo }>Prev todo</button>
            <button onClick={ handleNextTodo }>Next todo</button>
        </>
    )
}

export { TodoApp }