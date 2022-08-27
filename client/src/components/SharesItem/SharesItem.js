import React, { useEffect, useState } from "react";
import s from "./SharesItem.module.css";
import info from "../../assets/info.png";
import plus from "../../assets/plus.png";

const SharesItem = ({
  share,
  i
}) => {

  const [toggle, setToggle] = useState(false);

  const ticker = share.ticker;
  const companyNames =
    [
      "Apple Inc.",
      "Alphabet Inc.",
      "Microsoft",
      "Amazon Com.",
      "Meta",
      "Tesla Inc.",
    ];

  const companyNamesHandler = () => {
    switch (ticker) {

      case "AAPL": {
        return companyNames[0];
      }
      case "GOOGL": {
        return companyNames[1];
      }
      case "MSFT": {
        return companyNames[2];
      }
      case "AMZN": {
        return companyNames[3];
      }
      case "FB": {
        return companyNames[4];
      }
      case "TSLA": {
        return companyNames[5];
      }

      default:
        return ticker;
    }
  };

  const openModalHandler = () => {
    setToggle(toggle => !toggle);
  };

  const closeModalHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <ul key={i} className={s.list}>
        <li className={s.title}>{ticker}</li>
        <span className={s.companyNames}>{companyNamesHandler()}</span>
        <li className={s.price}>{share.price} $</li>
        <li className={s.percent}>↑ {share.change_percent}%</li>
        <img onClick={openModalHandler} className={s.infoIcon} src={info} alt="open modal icon"/>
      </ul>
      <ul className={toggle ? s.activeModalWrapper : s.modalWrapper}>
        <li>{companyNamesHandler()}</li>
        <li>Share name: {ticker}</li>
        <li>Share price: {share.price} $</li>
        <li>Exchange: {share.exchange}</li>
        <li>Change: {share.change} $</li>
        <li>Change percent: {share.change_percent}%</li>
        <li>Dividend: {share.dividend} $</li>
        <li>Yield: {share.yield} $</li>
        <li>Last trade time: {share.last_trade_time}</li>

      </ul>
    </>
  );
};

export default SharesItem;
