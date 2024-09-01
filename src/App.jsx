import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductDetails />
    </Provider>
  );
}

export default App;
