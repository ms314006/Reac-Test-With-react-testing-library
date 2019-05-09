import React, { useState } from 'react';

const Counter = () => {
  const [count, changeCount] = useState(0);

  return (
    <div>
      <span data-testid="display_count">{`點了${count}下`}</span>
      <br />
      <button className="add_button" type="button" onClick={() => { changeCount(count + 1); }}>點我加 1</button>
      <button className="add_button" type="button" onClick={() => { changeCount(count + 2); }}>點我加 2</button>
    </div>
  );
};

export default Counter;
