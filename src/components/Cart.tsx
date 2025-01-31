import React from "react";

interface Props {
  cartItem: string[];
  cleanCart: () => void;
}

const Cart = ({ cartItem, cleanCart }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={cleanCart}>Clear</button>
    </>
  );
};

export default Cart;
