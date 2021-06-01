import React from "react";

function Test({ asxCode, price, percentage, yearHigh, yearLow, high, low }) {
  return (
    <div>
      <h1>
        {asxCode} {price} {percentage} {yearHigh} {yearLow} {high} {low}{" "}
      </h1>
    </div>
  );
}

export default Test;
