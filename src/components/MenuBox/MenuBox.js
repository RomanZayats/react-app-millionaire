import React, { memo, useMemo } from "react";
import "./MenuBox.scss";
import MenuCloseBtn from "./MenuCloseBtn/MenuCloseBtn";
import useWinSize from "../../utils/hooks/useWinSize";
import MenuStep from "./MenuStep/MenuStep";
import { v4 as uuidv4 } from "uuid";

const MenuBox = (props) => {
  const { setShowMenu, winSumArr } = props;
  const { width: winWidth } = useWinSize();

  const winSumItems = useMemo(
    () =>
      winSumArr.map((ws) => <MenuStep winSum={ws} key={uuidv4()} />).reverse(),
    [winSumArr]
  );

  return (
    <div className="menu-container">
      {winWidth < 960 && <MenuCloseBtn onClick={() => setShowMenu(false)} />}
      {winSumItems}
    </div>
  );
};

export default memo(MenuBox);
