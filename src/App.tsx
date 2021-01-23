import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import { ToDoForm } from './components/TodoForm';

const App: React.FC = () => {
  const [todos, setTodos] = useState([])

  const addHandler = (title: string) => {
    console.log('Add New Todo', title)
  }

  return <>
    <Navbar />
    <div className="container">
      
      <ToDoForm onAdd={addHandler} />

    </div>
  </>
}

export default App;
