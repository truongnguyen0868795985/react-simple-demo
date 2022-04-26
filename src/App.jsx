import "./App.css";

import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([
    { id: 1, name: "iphone", date: new Date().toDateString() },
    { id: 2, name: "macbook", date: new Date().toDateString() },
  ]);

  const handleOnDeleteButtonClick = (name) => {
    console.log("on click");
    const newProductList = productList.filter(
      (product) => product.name !== name
    );
    setProductList(newProductList);
  };

  return (
    <>
      <div>Product List</div>
      <Button color="blue" name="Thêm" width="500px" />

      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} -{product.date}
            <span
              onClick={() => handleOnDeleteButtonClick(product.name)}
              style={{ color: "red", cursor: "pointer" }}
            >
              Delete
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
