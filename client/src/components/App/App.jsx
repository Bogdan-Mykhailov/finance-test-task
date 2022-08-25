import React from "react";
import s from "./App.module.css";
import SharesList from "../SharesList/SharesList";

const App = () => {

  return (
    <div className={s.app}>
      <SharesList/>
    </div>
  );
};

export default App;
