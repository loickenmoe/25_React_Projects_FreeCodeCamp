import React from "react";
import UseWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use window resize hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}
