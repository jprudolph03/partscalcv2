import React, { useState } from "react";

function App() {
  const [coilTotalKG, setCoilTotalKG] = useState("null");
  const [stdLoss, setStdLoss] = useState("null");
  const [partWeightG, setPartWeightG] = useState("null");
  const [counterTotal, setCounterTotal] = useState("null");
  const [scrapWeight, setScrapWeight] = useState("null");

  let prodWeight = parseInt(coilTotalKG - stdLoss);
  let expectedTotal = (prodWeight / partWeightG) * 1000;
  //   let countDiff = expectedTotal - counterTotal;
  let countDiff = counterTotal - expectedTotal;
  let scrapPartsByWeight = (scrapWeight / partWeightG) * 1000;
  let finalPartCount = counterTotal - scrapPartsByWeight;
  let percentLoss = (finalPartCount / expectedTotal) * 100 - 100;

  const handleTotal = (e) => {
    setCoilTotalKG(e.target.value);
  };

  const handleSTDLoss = (e) => {
    setStdLoss(e.target.value);
  };

  const handlePartWeightG = (e) => {
    setPartWeightG(e.target.value);
  };

  const handleCounterTotal = (e) => {
    setCounterTotal(e.target.value);
  };

  const handleScrapWeight = (e) => {
    setScrapWeight(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center display-1">Part Loss Calc</h1>
      <div className="container-sm">
        <div className="col">
          <h2>Inputs:</h2>
          <label for="basic-url" class="form-label">
            <strong>Total Coil Weight / KG</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Total Coil Weight"
              onChange={handleTotal}
            />
          </div>
          <label for="basic-url" class="form-label">
            <strong>STD Loss</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="STD Loss"
              onChange={handleSTDLoss}
            />
          </div>
          <label for="basic-url" class="form-label">
            <strong>Single Part Weight / G</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Single Part Weight"
              onChange={handlePartWeightG}
            />
          </div>
          <label for="basic-url" class="form-label">
            <strong>Counter Total</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Counter Total"
              onChange={handleCounterTotal}
            />
          </div>
          <label for="basic-url" class="form-label">
            <strong>Scrap Bucket Weight / KG</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Scrap Bucket Weight"
              onChange={handleScrapWeight}
            />
          </div>
        </div>
        <div className="col">
          <h2>Outputs:</h2>
          <p>
            Total Weight After Loss: <strong>{prodWeight}</strong> Kg
          </p>
          <p>
            Expected Total 100%: <strong>{parseInt(expectedTotal)}</strong>
          </p>
          <p>
            Expected vs. Counter = <strong>{parseInt(countDiff)}</strong>
          </p>
          <p>
            Scrap Parts By Weight ={" "}
            <strong>{parseInt(scrapPartsByWeight)}</strong>
          </p>
          <p>
            Final Part Count = <strong>{parseInt(finalPartCount)}</strong>
          </p>
          <p>
            Percent Loss = <strong>{percentLoss}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
