import "./_Sidebar.scss";
import { useState, useEffect, useRef } from "react";
import { FaMicrosoft, FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Pagination from "./Pagination";

const Sidebar = () => {
  const {
    cart,
    setCart,
    products,
    setProducts,
    isFilter,
    setIsFilter,
    dataFilter,
    setDataFilter,
    currPage,
    setCurrPage,
    prodPerPage,
    setProdPerPage,
  } = useGlobalContext();
  const url = "https://course-api.com/react-store-products";
  const [categories, setCategories] = useState([]);
  const [isRow, setIsRow] = useState(true);
  const [checked, setChecked] = useState([]);
  const [company, setCompany] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const checkboxAll = useRef(null);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleAddtoCart = (id, name, price, image, colors) => {
    if (id in cart) {
      cart[id].quantity += 1;
      cart[id].total = cart[id].price * cart[id].quantity;
      return setCart((prev) => ({ ...prev }));
    } else {
      cart[id] = {
        id,
        name,
        price,
        image,
        colors,
        quantity: 1,
        total: price,
      };
    }
    setCart((prev) => {
      return {
        ...prev,
        [id]: {
          id,
          name,
          price,
          image,
          colors,
          quantity: 1,
          total: price,
        },
      };
    });
  };
  const handleDisplayRow = () => {
    setIsRow(true);
  };
  const handleSelect = (e) => {
    const value = e.target.value;
    if (value === "Price (Lowest)") {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
      });
    }
    if (value === "Price (Highest)") {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
      });
    }
    if (value === "Name (A-Z)") {
      products.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
      });
    }
    if (value === "Name (Z-A)") {
      products.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
      });
    }
    setIsFilter(true);
    setDataFilter([...products]);
  };
  const handleInput = (e) => {
    const result = products.filter((item) => {
      return item.name.includes(e.target.value);
    });
    setIsFilter(true);
    setDataFilter(result);
  };
  const handleChecked = (cate) => {
    setChecked((prev) => {
      const isChecked = checked.includes(cate);
      if (isChecked) {
        return checked.filter((item) => item !== cate);
      } else {
        return [...prev, cate];
      }
    });
  };
  useEffect(() => {
    const categoriesList = [...new Set(products.map((item) => item.category))];
    if (checked.length === categoriesList.length) {
      setIsCheckedAll(true);
    } else {
      setIsCheckedAll(false);
    }
    if (checked.length === 0) {
      setIsCheckedAll(false);
    }
  }, [checked]);
  const handleCheckedAll = (e) => {
    if (e.target.checked) {
      setChecked([...new Set(products.map((item) => item.category))]);
    } else {
      setChecked([]);
    }
  };
  const handleClickColor = (e) => {
    const colorFilter = products.filter((item) =>
      item.colors.includes(e.target.id)
    );
    setIsFilter(true);
    setDataFilter(colorFilter);
  };
  const handleAllColor = () => {
    setIsFilter(false);
    setProducts(products);
  };
  const handleProgress = (e) => {
    setValueInput(e.target.value);
    const value = e.target.value;
    setIsFilter(true);
    const filterValueProgress = products.filter((item) => item.price <= value);
    setDataFilter(filterValueProgress);
  };
  const handleFreeShip = (e) => {
    if (e.target.checked) {
      const filterShip = products.filter((item) => item.shipping);
      setIsFilter(true);
      setDataFilter(filterShip);
    } else {
      setIsFilter(false);
      setProducts(products);
    }
  };
  const handleClearFilter = () => {
    setIsFilter(false);
    setProducts(products);
    setChecked([]);
  };
  const handleChangeCompany = (e) => {
    if (e.target.value === "all") {
      setIsFilter(false);
      setProducts(products);
    } else {
      const filterCompany = products.filter(
        (item) => item.company === e.target.value
      );
      setIsFilter(true);
      setDataFilter(filterCompany);
    }
  };
  const colorArr = products.map((item) => item.colors);
  const colorArrSet = [...new Set(colorArr.flat(Infinity))];
  useEffect(() => {
    if (checked.includes("all")) {
      return setIsFilter(false);
    }
    setIsFilter(true);

    const filterProduct = products.filter((product) =>
      checked.includes(product.category)
    );
    setDataFilter(filterProduct);
  }, [checked]);
  const handleDisplayColumn = () => {
    setIsRow(false);
  };

  const fetchUrl = async () => {
    try {
      const result = await fetch(url);
      const products = await result.json();
      setProducts(products);
      const categorySet = [...new Set(products.map((item) => item.category))];
      const conpanySet = [
        "all",
        ...new Set(products.map((item) => item.company)),
      ];
      setCompany(conpanySet);
      setCategories(categorySet);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUrl();
    setIsFilter(false);
  }, []);
  const indexOfLastProd = currPage * prodPerPage;
  const indexOfFirstProd = indexOfLastProd - prodPerPage;
  const currenProd = products.slice(indexOfFirstProd, indexOfLastProd);
  const filterProd = dataFilter.slice(indexOfFirstProd, indexOfLastProd);
  return (
    <main>
      <aside className="sidebar">
        <input
          className="sidebar__search"
          placeholder="Search"
          onChange={handleInput}
        />
        <h4 className="sidebar__title">Category</h4>

        <div ref={checkboxAll}>
          <input
            type="checkbox"
            id="html-all"
            checked={isCheckedAll}
            onChange={handleCheckedAll}
          />
          <label>All</label>
          {categories?.map((category, i) => {
            return (
              <div key={i} className="sidebar__category__item">
                <input
                  id={`html-${category}`}
                  type="checkbox"
                  checked={checked.includes(category)}
                  onChange={() => {
                    handleChecked(category);
                  }}
                />
                <label htmlFor={`html-${category}`}>{category}</label>
              </div>
            );
          })}
        </div>
        <h4 className="company">Company</h4>
        <select className="company-option" onChange={handleChangeCompany}>
          {company.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </select>
        <h4 className="color-title">Color</h4>
        <div className="color">
          <button className="btn-all" onClick={handleAllColor}>
            All
          </button>
          {colorArrSet.map((item, i) => (
            <button
              id={item}
              key={i}
              className="btn-color"
              style={{ backgroundColor: `${item}` }}
              onClick={handleClickColor}
            ></button>
          ))}
        </div>
        <p className="value-input">$ {valueInput}</p>
        <input
          type="range"
          min="0"
          max="309999"
          className="progress"
          onChange={handleProgress}
        ></input>
        <p className="free-ship">
          Free Shipping
          <input type="checkbox" onChange={handleFreeShip} />
        </p>
        <button className="btn-clear" onClick={handleClearFilter}>
          Clear Filter
        </button>
      </aside>
      <div className="container">
        <section className="result">
          <div className="result__display">
            <button
              className={`result__display_row ${isRow && "active"}`}
              onClick={handleDisplayRow}
            >
              <FaMicrosoft />
            </button>
            <button
              className={`result__display_column ${!isRow && "active"}`}
              onClick={handleDisplayColumn}
            >
              <FaBars />
            </button>
          </div>
          <p className="result__count">
            {isFilter ? `${dataFilter.length}Products Found` : ""}
          </p>
          <hr />
          <div className="result__sortselect">
            <p className="result__sort">Sort By</p>
            <select className="result__select" onChange={handleSelect}>
              <option>Price (Lowest)</option>
              <option>Price (Highest)</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
            </select>
          </div>
        </section>
        {isRow && !isFilter && (
          <section id="products" className="product-grid-row">
            {currenProd.map((product, i) => {
              const { id, name, price, image, colors, description } = product;
              return (
                <article key={i} className="product__row">
                  <div className="container-img">
                    <img
                      src={image}
                      alt="image"
                      className="product__row__img"
                    />
                    <a href="" className="link">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="product__row__info info">
                    <h4
                      className="info__name"
                      onClick={() =>
                        handleAddtoCart(id, name, price, image, colors)
                      }
                    >
                      {name}
                    </h4>
                    <p className="info__price">{`$${price}`}</p>
                  </div>
                </article>
              );
            })}
          </section>
        )}
        {
          <section className="product-grid-row" id="products">
            {isFilter &&
              isRow &&
              filterProd?.map((product, i) => {
                const { id, name, price, image, colors, description } = product;
                return (
                  <article key={i} className="product__row">
                    <img
                      src={image}
                      alt="image"
                      className="product__row__img"
                    />
                    <div className="product__row__info info">
                      <h4
                        className="info__name"
                        onClick={() =>
                          handleAddtoCart(id, name, price, image, colors)
                        }
                      >
                        {name}
                      </h4>
                      <p className="info__price">{`$${price}`}</p>
                    </div>
                  </article>
                );
              })}
          </section>
        }
        {!isFilter && !isRow && (
          <section className="productslist" id="products">
            {currenProd?.map((product, i) => {
              const { id, name, price, image, colors, description } = product;
              return (
                <article key={i} className="product">
                  <div className="product__img">
                    <img src={image} alt="image" className="" />
                  </div>

                  <div className="wrapper">
                    <div className="product__info">
                      <h4
                        className="product__info__name"
                        onClick={() =>
                          handleAddtoCart(id, name, price, image, colors)
                        }
                      >
                        {name}
                      </h4>
                      <p className="product__info__price">{`$${price}`}</p>
                    </div>
                    <div className="desc">
                      <p className="description">{description}</p>
                      <button className="btn-detail">Detail</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}
        {
          <section className="productslist" id="products">
            {isFilter &&
              !isRow &&
              filterProd?.map((product, i) => {
                const { id, name, price, image, colors, description } = product;
                return (
                  <article key={i} className="product">
                    <div className="product__img">
                      <img src={image} alt="image" />
                    </div>

                    <div className="wrapper">
                      <div className="product__info">
                        <h4
                          className="product__info__name"
                          onClick={() =>
                            handleAddtoCart(id, name, price, image, colors)
                          }
                        >
                          {name}
                        </h4>
                        <p className="product__info__price">{`$${price}`}</p>
                      </div>
                      <div className="desc">
                        <p className="description">{description}</p>
                        <button className="btn-detail">Detail</button>
                      </div>
                    </div>
                  </article>
                );
              })}
          </section>
        }
        <Pagination currenProd={currenProd} />
      </div>
    </main>
  );
};

export default Sidebar;
