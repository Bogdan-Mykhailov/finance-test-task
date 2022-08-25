import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTradingTC } from "../../bll/sharesReducer";

const SharesItem = () => {

  const dispatch = useDispatch();
  const shares = useSelector(state => state.shares.shares);

  useEffect(() => {
    dispatch(startTradingTC())
  }, [])

  return (
    <div>
      {shares.map((s, i) => {
        return <div key={i}>
          <span>{s.ticker}</span>
          <span>{s.price}</span>
          <span>{s.change}</span>
          <span>{s.change_percent}</span>
          <span>{s.dividend}</span>
          <span>{s.exchange}</span>
        </div>;
      })}
    </div>
  );
};

export default SharesItem;
