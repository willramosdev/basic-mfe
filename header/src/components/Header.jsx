import React, { useState } from "react";
export const Header = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header_left">logo</div>
        <div className="header_right">menu</div>
      </div>
    </header>
  );
};
