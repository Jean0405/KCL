import { CardButton } from ".";

export const CardContent = ({product}) => {
  return (
    <>
      <h2 className="font-bold text-sm flex items-center justify-between">
        <span>{product.name}</span>
        <CardButton />
      </h2>

      <p className="text-green-700 font-bold text-lg">${product.price}</p>
    </>
  );
};
