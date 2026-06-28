import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

function App() {

    const [todos , setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [{id:Date.now() ,...todo},...prev])  // MAKES COMPLETELY NEW ARRAY
    }

    const updateTodo = (id , todo) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo)) //REMOVE OLD AND MAKE COMPLETELY NEW ARRAY
    }

    const deleteTodo = (id) => {
        setTodos((todo) => todo.filter((delTodo) => delTodo.id !== id))  //FILTER OUT 
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed} : prevTodo ))     //REMOVE AND ADD ONLY ONE VALUE
    }

    useEffect(() => {
        const storedTodo = JSON.parse(localStorage.getItem('todo1'))  //Here name inside getItem(a) i.e = a, must be same to name in setItem(a) 

        if(storedTodo && storedTodo.length > 0){
            setTodos(storedTodo)
        }
    } , [])

    useEffect(() => {
        localStorage.setItem('todo1' , JSON.stringify(todos))   //todos in stringify comes from state const [todos, setTodos]
    } , [todos])
  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem  todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
