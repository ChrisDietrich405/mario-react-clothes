import React from "react";
import { useEffect } from "react/cjs/react.production.min";

import styles from "./styles.module.css";

const Cart = ({ cartProducts }) => {
  console.log(cartProducts);
  // const handleSummarizeProducts = () => {
  //   const result = cartProducts.reduce((prevValue, currentValue) => {}, 0);
  // };

  const cartProductTotals = cartProducts.reduce(
    (total, cartProduct) => {
      const { price } = cartProduct;
      total.totalItems++;
      total.totalPrice += price;
      return total;
    },
    {
      totalItems: 0,
      totalPrice: 0,
    }
  );
  console.log(cartProductTotals);

  // useEffect(() => {
  //   cartProductTotals;
  // }, []);

  return (
    <div className={styles.cart_container}>
      <ul className={styles.list_container}>
        {cartProducts.map((cartProduct) => {
          return <li>{cartProduct.title}</li>;
        })}
      </ul>

      <div className={styles.amount_container}>
        <div>Amount of Items:</div>
        <div>{cartProductTotals.totalItems}</div>
      </div>
      <div className={styles.price_container}>
        <div>Total Price:</div>
        <div> ${cartProductTotals.totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;

// const cartTotals = cart.reduce(
//   (total, cartItem) => {
//     const { amount, price } = cartItem;
//     total.totalItems += amount;
//     total.totalPrice += amount * price;
//   },
//   {
//     totalItems: 0,
//     totalPrice: 0,
//   }
// );
