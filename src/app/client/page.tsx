'use client';

import { useState } from 'react';

const ClientPage = () => {
  const [count, setCount] = useState(0);

  const onIncreaseClick = () => setCount((prev) => prev + 1);
  const onDecreaseClick = () => setCount((prev) => prev - 1);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-7xl font-bold">{count}</h1>

      <div className="flex gap-4">
        <button className="btn btn-primary" onClick={onIncreaseClick}>
          increase
        </button>

        <button className="btn btn-secondary" onClick={onDecreaseClick}>
          decrease
        </button>
      </div>
    </div>
  );
};

export default ClientPage;
