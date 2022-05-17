import React from "react";

const Cart = ({ cartProducts }) => {
  return (
    <div>
      <ul>
        {cartProducts.map((cartProduct) => {
          return <li>{cartProduct.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
