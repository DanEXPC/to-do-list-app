import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return(
    <>
      <h1>Information page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a at necessitatibus modi laboriosam eos saepe, vitae ipsam ipsum voluptatum.</p>
      <button className="btn" onClick={() => history.push('/')}>Go to the list of tasks</button>
    </>
  )
}