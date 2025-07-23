import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setisloading,setproducts, seterrorr } from "./productslice";

const Products = () => {
  const { productlist, isLoading, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setisloading());

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setproducts(data));
      })
      .catch((err) => {
        dispatch(seterrorr("Failed to fetch products"));
      });
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
  <div>
    <h1>Products</h1>
    <ul className="product-list-basic">
      {productlist.map((product) => (
        <li key={product.id} className="product-item-basic">
          <h4>{product.title}</h4>
          <img src={product.image} alt={product.title} className="product-image-basic" />
          <p className="product-price-basic">₹{product.price}</p>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Products;