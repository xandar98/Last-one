import React, { useEffect } from "react";
import { app, analytics } from "./firebase";

function App() {
  useEffect(() => {
    console.log("Firebase initialized:", app);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📅 TeleCalendar</h1>
      <p>This is your Telegram Calendar Mini App interface.</p>
    </div>
  );
}

export default App;
