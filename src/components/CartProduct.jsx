import { Image } from "@nextui-org/react";
import { Counter, CardContent } from ".";

const styles = {
  buttonLeft: "p-2 w-10 h-10",
  span: "w-10",
  buttonRight: "p-2 w-10 h-10",
};

export const CardProduct = () => {
  return (
    <div className="flex flex-row h-72 m-6">
      <div>
        <Image
          className="hover:scale-110"
          src="https://www.fusionselvatica.com/cdn/shop/products/ACEITEDEALMENDRAS.jpg?v=1670310178&width=200"
          alt="product image"
        />
      </div>
      <div className="pl-4">
        <CardContent />
        <div className="flex items-center">
          <Counter styles={styles} />
          <button className="mx-5 group">
            Quitar
            <div className="w-full scale-100 h-[1px] bg-black group-hover:scale-0 transition-all duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};
