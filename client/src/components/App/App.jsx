import React from "react";
import s from "./App.module.css";
import socket from "../../utils/socket";


function App() {

  socket.emit("start");
  socket.on("connect", () => {
    console.log(socket.connected);
  });

  socket.on("ticker", (data) => {
    console.log(data);
  });


  return (
    <div className={s.app}>

    </div>
  );
}

export default App;
