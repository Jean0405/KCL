import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { counter, decrement, increment } = useCounter();

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-zinc-200 hover:bg-zinc-800 text-black hover:text-white font-bold py-2 px-4 rounded-l w-14 h-10"
        onClick={() => decrement()}
      >
        -
      </button>
      <span className="bg-white py-2 px-4 w-14 h-10">{counter}</span>
      <button
        className="bg-zinc-200 hover:bg-zinc-800 text-black hover:text-white font-bold py-2 px-4 rounded-r w-14 h-10"
        onClick={() => increment()}
      >
        +
      </button>
    </div>
  );
};
