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

      <button onClick={}>Delete macbook</button>
      <ul>
        {productList.map((product) => (
          <li>{product.name} <span>Delete</span></li>
        ))}
      </ul>
    </>
  );
}

export default App;
