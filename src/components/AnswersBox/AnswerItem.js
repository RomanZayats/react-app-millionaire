import React, { memo, useState } from "react";
import useWinSize from "../../utils/hooks/useWinSize";
import "../../theme/styles/_variables.scss";
import bgImgSubHandler from "./utils/utils";

const AnswerItem = (props) => {
  const {
    optionLetter,
    optionText,
    optionValue,
    step,
    setStep,
    winSumArr,
  } = props;
  const { width: winWidth } = useWinSize();

  const defaultBgImg = () =>
    `url(${bgImgSubHandler(winWidth, null, optionLetter, null)})`;
  const [bgImg, setBgImg] = useState(defaultBgImg());

  const stepCounter = (gameStep) => {
    localStorage.setItem("result", JSON.stringify(winSumArr[`${gameStep}`]));
    setBgImg(defaultBgImg());
    setStep(gameStep + 1);
  };

  const bgImgHandler = (windowParams, event, letter, value) => {
    setBgImg(bgImgSubHandler(windowParams, event.type, letter, value));
    if (value === "incorrect") {
      setTimeout(() => {
        setStep(12);
      }, 500);
    }
  };

  const optionClickHandler = (windowParams, event, letter, value) => {
    setTimeout(() => {
      bgImgHandler(windowParams, event, letter, null);
    }, 300);
    setTimeout(() => {
      bgImgHandler(windowParams, event, letter, value);
    }, 1500);
    setTimeout(() => {
      // setClicked(true)
      stepCounter(step);
    }, 2500);
  };

  return (
    // eslint-disable-next-line
    <a
      href="#"
      className="option-link"
      onClick={(e) =>
        optionClickHandler(winWidth, e, optionLetter, optionValue)
      }
      onMouseOver={(e) => bgImgHandler(winWidth, e, optionLetter, null)}
      onMouseLeave={(e) => bgImgHandler(winWidth, e, optionLetter, null)}
    >
      <div className="option-box" style={{ background: bgImg }}>
        <p>{`${optionText}`}</p>
      </div>
    </a>
  );
};

export default memo(AnswerItem);
