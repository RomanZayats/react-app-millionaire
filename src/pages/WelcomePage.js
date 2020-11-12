import React from 'react';
import Logotype from '../components/Logotype/Logotype';
import Greetings from '../components/Greetings/Greetings';
import './WelcomeAndResultsWrapper.scss';

const WelcomePage = () => {
  return (
    <div className="page-wrapper">
      <Logotype/>
      <Greetings mainText='Who wants to be a millionaire?'
                 buttonText='Start'
      />
    </div>
  )
}

export default WelcomePage;