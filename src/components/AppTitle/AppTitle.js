import React from 'react'
import Button from '../Button/Button'
import './AppTitle.scss'

const AppTitle = () => {
  return (
    <div className='app-title-container'>
      <h1 className='app-title-text'>Who wants to be a millionaire?</h1>
      <Button text="Start" />
    </div>
  )
}

export default AppTitle