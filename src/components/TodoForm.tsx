import React from 'react'

export const ToDoForm: React.FC = () => {

    return (
        <div className="input-field mt2">
            <input type="text" id="title" placeholder="Enter task title"/>
            <label htmlFor="title" className="active">Enter task title</label>
        </div>
    )
}