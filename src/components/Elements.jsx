import React, { useState } from "react";

function Elements({dispElems}) {
  let currArray = Object.values(dispElems);
  return (<>{currArray.join(',')}</>)
}

export default Elements;