import React from "react";
import { useEffect } from "react";

import styles from "./styles.module.css";

const Cart = ({ cartProducts, handleDeleteProduct }) => {
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

  return (
    <div className={styles.cart_container}>
      <ul className={styles.list_container}>
        {cartProducts.map((cartProduct, index) => {
          return (
            <li>
              {cartProduct.title}{" "}
              <button onClick={() => handleDeleteProduct(cartProduct)}>
                Delete
              </button>
            </li>
          );
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
