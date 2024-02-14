import { Image } from "@nextui-org/react";
import { Counter, CardContent } from ".";

const styles = {
  buttonLeft: "p-2 w-10 h-10",
  span: "w-10",
  buttonRight: "p-2 w-10 h-10",
};

export const CardProduct = ({product}) => {
  return (
    <div className="group grid grid-cols-3 p-2 gap-3 cursor-pointer">
      <div>
        <Image
          className="w-[100px] h-[100px] border-2 group-hover:border-green-600"
          src={product.img}
          alt="product image"
        />
      </div>
      <div className="col-span-2">
        <CardContent product={product}/>
        <div className="flex items-center">
          <Counter styles={styles} product={product}/>
        </div>
      </div>
    </div>
  );
};
