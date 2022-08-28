import React, { useEffect } from "react";
import s from "./App.module.css";
import SharesList from "../SharesList/SharesList";
import { startTradingTC } from "../../bll/shares-reducer";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startTradingTC())
  }, [])

  return (
    <div className={s.app}>
      <SharesList/>
    </div>
  );
};

export default App;
