import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle: (id: number) => void // 1 variant
    onRemove(id: number): void // 2 variant
}

export const ToDoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <p className="center">Nothing to do yet</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if(todo.completed) {
          classes.push('completed')
        }
          return (
            <li className={classes.join(' ')} key={todo.id}>
              <label>
                  <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
                  <span>{todo.title}</span>
                  <i 
                    className="material-icons red-text"
                    onClick={event => removeHandler(event, todo.id)}>delete</i>
              </label>
            </li>
          )
      })}
        
    </ul>
  )
}