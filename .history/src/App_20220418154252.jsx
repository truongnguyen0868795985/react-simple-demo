import "./App.css";

import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([
    { id: 1, name: "iphone" },
    { id: 2, name: "macbook" },
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
      <div>Hello world</div>

      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name}
            <span
              onClick={handleOnDeleteButtonClick(product.name)}
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
