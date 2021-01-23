import React, {useState} from 'react';
import { Navbar } from './components/Navbar'
import { ToDoForm } from './components/TodoForm'
import { ToDoList } from './components/TodoList'
import { ITodo } from './interfaces'


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  return <>
    <Navbar />
    <div className="container">
      <ToDoForm onAdd={addHandler} />

      <ToDoList todos={todos}/>
    </div>
  </>
}

export default App;
