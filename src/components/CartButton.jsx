export const CardButton = ({setIsCartOpen}) => {
  return (
    <>
      <button onClick={()=>setIsCartOpen(false)} className="hover:text-zinc-400 text-xl ml-2 mt-1">
        <ion-icon name="close"></ion-icon>
      </button>
    </>
  );
};
