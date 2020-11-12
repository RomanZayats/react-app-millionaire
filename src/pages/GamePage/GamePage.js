import React, { useState } from 'react';
import './GamePage.scss';
import Question from '../../components/Question/Question';
import Answers from '../../components/Answers/Answers';
import BurgerBtn from '../../components/BurgerBtn/BurgerBtn';
import Menu from '../../components/Menu/Menu';

const GamePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='game-container'>
      <BurgerBtn onClick={() => setShowMenu(true)}/>
      <Question/>
      <Answers/>
      {showMenu && <Menu setShowMenu={setShowMenu}/>}
    </div>
  )
}

export default GamePage;