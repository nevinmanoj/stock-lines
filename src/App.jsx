import SimpleLineChart from "./linetest.jsx";
import { useState } from "react";
import "./App.css";
import { MfMain } from "./mf/mfMain.jsx";
function App() {
  const [isStock, setIsStock] = useState(true);

  return (
    <>
      <div>
        <div className="section-btns">
          <div
            className="section-btn"
            onClick={() => {
              if (!isStock) {
                setIsStock(true);
              }
            }}
          >
            Stocks
          </div>
          <div
            className="section-btn"
            onClick={() => {
              if (isStock) {
                setIsStock(false);
              }
            }}
          >
            Mutual Funds
          </div>
        </div>

        {isStock ? <SimpleLineChart /> : <MfMain />}
      </div>
    </>
  );
}

export default App;
