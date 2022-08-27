import React from "react";
import s from './SharesItem.module.css'

const SharesItem = ({ share, i}) => {

  return (
    <div key={i} className={s.itemWrapper}>
      <ul className={s.item}>
        <li className={s.title}>{share.ticker}</li>
        <li className={s.title}>{share.price}</li>
        <li className={s.percent}>{share.change_percent}%</li>
      </ul>
    </div>
  );
};

export default SharesItem;
