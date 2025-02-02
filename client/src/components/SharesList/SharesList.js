import React from "react";
import SharesItem from "../SharesItem/SharesItem";
import { useSelector } from "react-redux";
import s from "./SharesList.module.css";

const SharesList = () => {

  const shares = useSelector(state => state.shares.shares);

  return (
    <>
      <h1 className={s.title}>The most popular exchange funds on Google</h1>
      <div className={s.wrapper}>
        {shares.map((share, i) => <SharesItem share={share} key={i}/>)}
      </div>
    </>
  );
};

export default SharesList;
