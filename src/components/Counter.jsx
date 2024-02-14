import { useCounter } from "../hooks/useCounter";

export const Counter = ({ styles, product }) => {
  const { counter, decrement, increment } = useCounter(product);

  return (
    <div className={`flex items-center ${styles?.div}`}>
      <button
        className={`bg-zinc-200 hover:bg-zinc-800 text-black hover:text-white font-bold rounded-l ${styles?.buttonLeft} `}
        onClick={() => decrement()}
      >
        -
      </button>
      <span className={`bg-white py-2 px-4 h-10 ${styles?.span}`}>
        {counter}
      </span>
      <button
        className={`bg-zinc-200 hover:bg-zinc-800 text-black hover:text-white font-bold rounded-r  ${styles?.buttonRight}`}
        onClick={() => increment()}
      >
        +
      </button>
    </div>
  );
};
