import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Context } from "../context/Context";

const CartModal = (props) => {
  const { cartItems, removeFromCart } = useContext(Context);

  const price = cartItems
    .map((product) => product.price)
    .reduce((total, value) => total + value, 0);

  return (
    <div className="fixed w-[400px] max-h-[300px] top-[60px] right-[-20px] sm:right-[35px] shadow-2xl z-10 bg-white">
      <div className="max-h-[100px] sm:max-h-[200px] overflow-hidden overflow-y-auto pb-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between px-8 items-center mt-2"
          >
            <p>
              <span className="p-1 rounded-full flex justify-center items-center bg-darkgray">
                {item.price}$
              </span>
            </p>
            <p className="font-semibold">{item.name}</p>
            <button onClick={() => removeFromCart(item)}>
              <AiOutlineCloseCircle size="1.2em" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-8 py-4">
        <p>
          Total Amount:{" "}
          <span className="text-orange-500 font-semibold">{`${price}$`}</span>
        </p>
        <button className="p-2 bg-black text-white rounded-f ull text-[12px] font-semibold hover:opacity-75 duration-400 ease-out">
          Order
        </button>
      </div>
      <a
        onClick={props.onCloseCartModal}
        className="w-full flex items-center justify-center py-[6px] text-[15px]  bg-black text-white rounded-lg font-semibold hover:opacity-75 duration-400 ease-out cursor-pointer"
      >
        Close
      </a>
    </div>
  );
};

export default CartModal;
