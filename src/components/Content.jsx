export const Content = ({ product }) => {
  return (
    <>
      <h2 className="font-bold text-3xl">{product.name}</h2>
      <p className="text-gray-500 font-bold text-xl">${product.price}</p>
      <p className="sm:text-lg text-justify m-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis
        hic totam quibusdam inventore unde dignissimos quae cum, voluptatem
        animi?
      </p>
    </>
  );
};
