import React from "react";
import "./MenuCloseBtn.scss";

const MenuCloseBtn = (props) => {
  const { onClick } = props;

  return <button className="close-btn" onClick={onClick} />;
};

export default MenuCloseBtn;
