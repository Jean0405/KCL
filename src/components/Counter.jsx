import { useCounter } from "../hooks/useCounter";

export const Counter = ({ styles, product }) => {
  const { counter, decrement, increment } = useCounter(product);

  return (
    <div className={`flex items-center ${styles?.div}`}>
      <button
        className={`bg-green-800 hover:bg-green-700 text-white hover:text-black font-bold rounded-l ${styles?.buttonLeft} `}
        onClick={() => decrement()}
      >
        -
      </button>
      <span className={`bg-white dark:bg-green-100 dark:text-black py-2 px-4 h-10 ${styles?.span}`}>
        {counter}
      </span>
      <button
        className={`bg-green-800 hover:bg-green-700 text-white hover:text-black font-bold rounded-r  ${styles?.buttonRight}`}
        onClick={() => increment()}
      >
        +
      </button>
    </div>
  );
};
