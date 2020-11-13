import React, { useState } from 'react';
import './GamePage.scss';
import Question from '../../components/Question/Question';
// import AnswerOptions from '../../components/AnswerOptions/AnswerOptions';
import MenuBurgerBtn from '../../components/MenuBurgerBtn/MenuBurgerBtn';
import MenuBox from '../../components/MenuBox/MenuBox';
// import --AnswerTemplate from '../../components/--AnswerTemplate/--AnswerTemplate'
import AnswerOptions from '../../components/AnswerOptions/AnswerOptions'

const GamePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='game-container'>
      <MenuBurgerBtn onClick={() => setShowMenu(true)}/>
      <Question/>
      <AnswerOptions/>
      {showMenu && <MenuBox setShowMenu={setShowMenu}/>}
    </div>
  )
}

export default GamePage;

// <--AnswerTemplate screenSize='mobile' optionLetter='A'/>
