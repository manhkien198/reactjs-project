import "./_Cart.scss";
import { useGlobalContext } from "./Context";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart, setCart, showCart, setShowCart } = useGlobalContext();
  const arrCart = Object.values(cart);
  const handleReduce = (id) => {
    cart[id].quantity -= 1;
    cart[id].total = cart[id].quantity * cart[id].price;
    setCart((prev) => ({ ...prev }));
  };
  const handleIncrease = (id) => {
    cart[id].quantity += 1;
    cart[id].total = cart[id].quantity * cart[id].price;
    setCart((prev) => ({ ...prev }));
  };
  const removeProductCart = (id) => {
    setCart((prev) => {
      delete prev[id];
      return { ...prev };
    });
  };
  return (
    <>
      {showCart && (
        <div className="cart" id="cart">
          <header>
            <div className="cart__title title">
              <h3 className="title-text">
                <span className="title__text--color">Home</span>/ Products
              </h3>
            </div>
          </header>
          <section className="cart__product">
            <div className="cart__product__header">
              <h5 className="cart-menu">Item</h5>
              <h5 className="cart-menu">Price</h5>
              <h5 className="cart-menu">Quanity</h5>
              <h5 className="cart-menu">Subtotal</h5>
              <span></span>
            </div>
          </section>
          {arrCart.map((item) => {
            const { id, name, price, image, colors, quantity, total } = item;
            return (
              <>
                <div className="cart__product__content">
                  <div className="img-info">
                    <img className="img-cart" src={image} />
                    <div className="info-product">
                      <h5 className="product-cart-name">{name}</h5>
                      <div className="product-cart-color">
                        Color:{" "}
                        {colors.map((color, i) => (
                          <div
                            key={i}
                            className="color-product-cart"
                            style={{ backgroundColor: `${color}` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="price-product">{price}</p>
                  <div className="amount-btns">
                    <button
                      type="button"
                      className="amount-btn"
                      onClick={() => handleReduce(id)}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </button>
                    <h2 className="amount">{quantity}</h2>
                    <button
                      type="button"
                      className="amount-btn"
                      onClick={() => handleIncrease(id)}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </button>
                  </div>
                  <h5 className="subtotal">{total}</h5>
                  <button
                    className="remove-btn"
                    onClick={() => removeProductCart(id)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                    </svg>
                  </button>
                </div>
                <hr />
              </>
            );
          })}
          <h4 className="total-amount">
            Total:
            {arrCart.reduce((acc, curr) => acc + curr.total, 0)}
          </h4>
        </div>
      )}
    </>
  );
};
export default Cart;
