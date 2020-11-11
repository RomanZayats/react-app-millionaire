import React from 'react'
import Logotype from '../Logotype/Logotype'
import AppTitle from '../AppTitle/AppTitle'
import './Wrapper.scss'

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Logotype/>
      <AppTitle/>
    </div>
  )
}

export default Wrapper