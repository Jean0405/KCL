export const Content = ({ product }) => {
  const cantidad = 5;
  const elementos = [];

  for (let i = 0; i < cantidad; i++) {
    elementos.push(
      <span key={i}>
        <ion-icon name="star"></ion-icon>
      </span>
    );
  }
  return (
    <>
      <h2 className="font-bold text-3xl">{product.name}</h2>
      <p className="text-gray-500 dark:text-green-100 font-bold text-xl">${product.price}</p>
      <div className="w-full flex flex-col justify-center items-start gap-1 px-4">
        <p className="text-gray-700 dark:text-green-100 text-lg">Popularidad del producto</p>
        <div className="flex">
        {elementos}
        </div>
      </div>
      <p className="sm:text-lg text-justify m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis
        hic totam quibusdam inventore unde dignissimos quae cum, voluptatem
        animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis
        hic totam quibusdam inventore unde dignissimos quae cum, voluptatem
        animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis
        hic totam quibusdam inventore unde dignissimos quae cum, voluptatem
        animi?
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis
        hic totam quibusdam inventore unde dignissimos quae cum, voluptatem
        animi?
      </p>
    </>
  );
};
