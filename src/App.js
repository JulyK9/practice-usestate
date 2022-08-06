import React, { useState } from "react";
import "./styles.css";

// github 연동 test
function App() {
  const [popup, setPopup] = useState(false);

  const handlePopup = (e) => {
    setPopup(popup ? false : true);
  };

  return (
    <div className="App">
      <h1>Fix me to open Pop up</h1>
      <button className="open" onClick={handlePopup}>
        Open me
      </button>
      {popup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={handlePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
