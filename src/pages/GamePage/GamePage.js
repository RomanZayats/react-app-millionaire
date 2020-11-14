import React, { memo, useEffect, useMemo, useState } from 'react'
import './GamePage.scss'
import MenuBurgerBtn from '../../components/MenuBurgerBtn/MenuBurgerBtn'
import MenuBox from '../../components/MenuBox/MenuBox'
import QuestionBox from '../../components/QuestionBox/QuestionBox'
import AnswerOptions from '../../components/AnswerOptions/AnswerOptions'
import useWinSize from '../../utils/hooks/useWinSize'
import * as axios from 'axios'
import Loader from '../../components/Loader/Loader'

const GamePage = () => {
  const { width: winWidth } = useWinSize()
  const [showMenu, setShowMenu] = useState(false)
  const [gameDataBase, setGameDataBase] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [step, setStep] = useState(0)

  useEffect(() => {
    axios('dataBaseOne.json')
      .then(res => {
        setGameDataBase(res.data)
        setIsLoading(false)
      })
  }, [])

  const winSumArr = useMemo(() => gameDataBase.map(q => q.winSum), [gameDataBase])
  const questionObjArr = useMemo(() => gameDataBase.map(q => q.question), [gameDataBase])

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className='game-container'>
      {winWidth < 960 && <MenuBurgerBtn onClick={() => setShowMenu(true)}/>}
      {<QuestionBox questionObjArr={questionObjArr}/>}
      <AnswerOptions questionObjArr={questionObjArr} answerOptions={['Option-A', 'Option-B', 'Option-C', 'Option-D']}/>
      {winWidth < 960 && showMenu && <MenuBox winSumArr={winSumArr} setShowMenu={setShowMenu}/>}
      {winWidth >= 960 && <MenuBox winSumArr={winSumArr} setShowMenu={setShowMenu}/>}
    </div>
  )
}

export default memo(GamePage)
