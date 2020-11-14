import React, { memo } from 'react'
import Logotype from '../components/Logotype/Logotype';
import Greetings from '../components/Greetings/Greetings';
import './WelcomeAndResults.scss';

const ResultsPage = () => {
  return (
    <div className="page-wrapper">
      <Logotype/>
      <Greetings resultsText='Total score:'
                 mainText='$8,000 earned'
                 buttonText='Try again'
      />
    </div>
  )
}

export default memo(ResultsPage);