import logo from "./logo.svg";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import "./_Header.scss";
import Cart from "./Cart";
import { useGlobalContext } from "./Context";
const Header = () => {
  const { cart, showCart, setShowCart } = useGlobalContext();
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <nav className="nav">
        <div className="nav__header">
          <img src={logo} alt="logo" className="nav__header__logo" />
        </div>
        <ul className="nav__center">
          <li className="nav__center__item">
            <a href=""></a>Home
          </li>
          <li className="nav__center__item">
            <a href=""></a>About
          </li>
          <li className="nav__center__item">
            <a href="#products"></a>Product
          </li>
        </ul>
        <div className="nav__footer">
          <a
            href="#cart"
            className="nav__footer__cart cart"
            onClick={handleShowCart}
          >
            Cart
            <span className="cart__btn">
              <FaShoppingCart />
            </span>
            <span className="product-amount">
              {[...Object.values(cart)].length}
            </span>
          </a>
          <div className="nav__footer__login login">
            <button className="login__btn">
              Login
              <span className="login-icon">
                <FaUserPlus />
              </span>
            </button>
          </div>
        </div>
      </nav>
      <Cart />
    </>
  );
};
export default Header;
