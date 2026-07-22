import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../TodoSlice/TodoSlice"

function TodoItem() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <div>
        {
            todos.map((todo) => (
                <div
                key={todo.id}
                >{todo.text}
                <button
                onClick={() => dispatch(removeTodo(todo.id))}
                >x</button>
                </div>
               
            ))
        }
    </div>
  )
}

export default TodoItem