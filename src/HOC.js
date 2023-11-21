import React, { useState } from "react";

const HOC = (WrapperComponent) => {
  // This is the Higher-Order Component (HOC)
  //====================Innner Component Start ================
  function Counter() {
    const [count, setCount] = useState(0);

    function handleCount() {
      setCount(count + 1);
    }

    // Render the wrapped component with the enhanced props
    return <WrapperComponent handleCount={handleCount} count={count} />;
  }
  //==================Inner Componenet Ende====================

  // Return the Counter component, which now includes the logic from the HOC
  return Counter;
};

export default HOC;
