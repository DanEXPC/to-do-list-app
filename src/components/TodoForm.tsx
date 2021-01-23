import React, {useState} from 'react'

export const ToDoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <div className="input-field mt2">
        <input 
          onChange={changeHandler}
          value={title} 
          type="text" 
          id="title" 
          placeholder="Enter task title"/>
        <label htmlFor="title" className="active">Enter task title</label>
    </div>
  )
}