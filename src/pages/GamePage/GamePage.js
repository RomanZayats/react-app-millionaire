import React, { useState } from 'react';
import './GamePage.scss';
import MenuBurgerBtn from '../../components/MenuBurgerBtn/MenuBurgerBtn';
import MenuBox from '../../components/MenuBox/MenuBox';
import Question from '../../components/Question/Question';
import AnswerOptions from '../../components/AnswerOptions/AnswerOptions'
import useWinSize from '../../utils/hooks/useWinSize'

const GamePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const {width: winWidth} = useWinSize();

  return (
    <div className='game-container'>
      {winWidth < 960 && <MenuBurgerBtn onClick={() => setShowMenu(true)}/>}
      <Question questionText={'Question from server'}/>
      <AnswerOptions answerOptions={['Option-A', 'Option-B', 'Option-C', 'Option-D']}/>
      {showMenu && <MenuBox setShowMenu={setShowMenu}/>}
      {winWidth >= 960 && <MenuBox setShowMenu={setShowMenu}/>}
    </div>
  )
}

export default GamePage;