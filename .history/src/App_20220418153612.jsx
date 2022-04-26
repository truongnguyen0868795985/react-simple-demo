import "./App.css";

import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([
    { name: "iphone" },
    { name: "macbook" },
  ]);

  return (
    <>
      <div>Hello world</div>

      <ul>
        {productList.map((product) => (
          <li>
            {product.name}{" "}
            <span style={{ color: "red", cursor: "pointer" }}>Delete</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
