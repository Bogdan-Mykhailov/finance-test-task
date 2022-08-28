import React from "react";
import s from "./SharesItem.module.css";
import info from "../../assets/info.png";
import useOutside from "../../utils/useOutside";

const SharesItem = ({
  share,
  i
}) => {

  const {
    ref,
    isShow,
    setIsShow
  } = useOutside(false);

  const ticker = share.ticker;

  const openInfoWindowHandler = () => {
    setIsShow(isShow => !isShow);
  };

  return (
    <>
      <ul key={i} className={s.list}>
        <li style={{ backgroundColor: `${share.color}` }} className={s.title}>{ticker}</li>
        <span className={s.companyNames}>{share.name}</span>
        <li className={s.price}>{share.price} $</li>
        <li className={s.percent}>{share.change_percent}%</li>
        <img onClick={openInfoWindowHandler} className={s.infoIcon} src={info}
             alt="open modal icon"/>
      </ul>

      <ul
        ref={ref}
        className={isShow
          ? s.activeInfoWrapper
          : s.infoWrapper}>
        <li className={s.information}>Company name:
          <span className={s.infoTitle}>{share.name}</span></li>
        <hr/>
        <li className={s.information}>Share name:
          <span className={s.infoTitle}>{ticker}</span></li>
        <li className={s.information}>Share price:
          <span className={s.infoTitle}>{share.price} $</span></li>
        <li className={s.information}>Exchange:
          <span className={s.infoTitle}>{share.exchange}</span></li>
        <li className={s.information}>Change:
          <span className={s.infoTitle}>{share.change} $</span></li>
        <li className={s.information}>Change percent:
          <span className={s.infoTitle}>{share.change_percent}%</span></li>
        <li className={s.information}>Dividend:
          <span className={s.infoTitle}>{share.dividend} $</span></li>
        <li className={s.information}>Yield:
          <span className={s.infoTitle}>{share.yield} $</span></li>
        <li className={s.information}>Last trade time:
          <span className={s.infoTitle}>{share.last_trade_time}</span></li>
      </ul>
    </>
  );
};

export default SharesItem;
