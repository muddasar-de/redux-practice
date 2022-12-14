import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const Products = () => {
  //   const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAddProd = (product) => {
    console.count("Click");
    dispatch(add(product));
  };
  const handleRemoveProd = (id) => {
    console.count("Click");
    dispatch(remove(id));
  };
  if (status === STATUSES.LOADING) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="product_wraper">
      {products.map((item, index) => {
        return (
          <div className="product_card" key={index}>
            <img src={item.image} />
            <div className="product_details">
              <h1>{item.title}</h1>
              <h3>${item.price}</h3>
              <button
                onClick={() => {
                  handleAddProd(item);
                }}
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  handleRemoveProd(item.id);
                }}
              >
                Remove from cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
