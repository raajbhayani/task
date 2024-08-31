import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useNavigate } from 'react-router-dom';





export const Cart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    const res = await axios.get("https://dummyjson.com/products/");
    setProducts(res?.data?.products);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>    
    <Navbar/>
    <div className="container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="cart md:col-span-8">
          <div className="btn-back py-2" onClick={() => navigate('/home')}>
            <i className="fa-solid fa-arrow-left"></i> Back to Shopping
          </div>
          <div className="cart-title">My Cart</div>

          <div className="cart-p-details flex flex-row flex-wrap pr-24 justify-between">
            <div className="cart-left flex flex-row">
              <div className="cart-p-img">
                <img
                  src={products[0]?.thumbnail}
                  height={"200px"}
                  width={"200px"}
                  alt="Product Image"
                />
              </div>
              <div className="flex flex-col">
                <div className="cart-p-title mb-4" >{products[0]?.title}</div>
                <div className="cart-p-brand mb-4">
                  By {products[0]?.brand} | {products[0]?.category}
                </div>
                <div className="cart-p-rating mb-4 ">
                  Rating:{" "}
                  <span className="font-bold">{products[0]?.rating}</span>
                </div>
              </div>
            </div>

            <div className="cart-right flex flex-col justify-between">
              <div className="cart-p-price">
                <span className="cart-p-price-1">
                  {"$ " + (products[0]?.price - 8).toFixed(2)}
                </span>
                <br />
                <span className="cart-p-price-2">
                  {"$ " + products[0]?.price}
                </span>
              </div>
              <div className="cart-p-qty"></div>
              <div className="cart-p-btn-1">Save for Later</div>
              <div className="cart-p-btn-2">
                <i className="fa-solid fa-trash-can"></i>Remove
              </div>
            </div>
          </div>
        </div>
        <div className="order-summary shadow pl-10 md:col-span-4 mt-20 ">
          <h3 className="summary-title pb-4 font-bold text-3xl">
            Order Summary
          </h3>
          <div className="summary-des pb-4">
            This order qualifies for Free Shipping!
          </div>
          <div className="pb-2 flex flex-row justify-between">
            <div>Item Sub Total</div>
            <div>55</div>
          </div>
          <div className="pb-2 flex flex-row justify-between">
            <div>
              Deliver to <span className="font-bold">India 123456</span>{" "}
            </div>
            <div>Free</div>
          </div>
          <div className="pb-2 flex flex-row justify-between">
            <div>Estimated Tax</div>
            <div>$ 38</div>
          </div>
          <hr />
          <div className="pt-4 pb-2 flex flex-row justify-between">
            <div className="font-bold"> Total</div>
            <div>$ 138</div>
          </div>
          <div className="pb-2 flex flex-row justify-between">
            <div>You Save</div>
            <div>$ 18</div>
          </div>
          <div className="btn-checkout">Proceed to Checkout</div> 
        </div>
      </div>
    </div>
    </>

  );
};


