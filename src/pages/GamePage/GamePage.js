import React, { memo, useEffect, useMemo, useState } from 'react';
import './GamePage.scss';
import MenuBurgerBtn from '../../components/MenuBox/MenuBurgerBtn/MenuBurgerBtn';
import MenuBox from '../../components/MenuBox/MenuBox';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import AnswerOptions from '../../components/AnswersBox/AnswersBox';
import useWinSize from '../../utils/hooks/useWinSize';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import { Redirect } from 'react-router-dom';

const GamePage = () => {
  const { width: winWidth } = useWinSize();
  const [showMenu, setShowMenu] = useState(false);
  const [gameDataBase, setGameDataBase] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    axios('dataBase.json')
      .then(res => {
        setGameDataBase(res.data)
        setTimeout(() => {
          setIsLoading(false)
          localStorage.removeItem('result')
        }, 600)
      })
  }, [])

  const winSumArr = useMemo(() => gameDataBase.map(q => q.winSum), [gameDataBase]);
  const questionObjArr = useMemo(() => gameDataBase.map(q => q.question), [gameDataBase]);

  if (isLoading) {
    return <Loader/>
  }

  if (step > 11) {
    return <Redirect to={'/results'}/>
  }

  return (
    <div className='game-container'>
      {winWidth < 960 && <MenuBurgerBtn onClick={() => setShowMenu(true)}/>}

      {<QuestionBox step={step}
                    setStep={setStep}
                    questionObjArr={questionObjArr}/>}

      <AnswerOptions step={step}
                     setStep={setStep}
                     winSumArr={winSumArr}
                     questionObjArr={questionObjArr}/>

      {winWidth < 960 && showMenu && <MenuBox winSumArr={winSumArr} setShowMenu={setShowMenu}/>}

      {winWidth >= 960 && <MenuBox winSumArr={winSumArr} setShowMenu={setShowMenu}/>}
    </div>
  )
}

export default memo(GamePage);
