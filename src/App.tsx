import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Like from "./components/like";


function App() {

  return (
    <div>
      <Like onClick={() => console.log("Clicked")} liked={false} />
    </div>
  );
}

export default App;