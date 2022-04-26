const app = document.getElementById("app");

console.log(app);
let productList = [
  { id: 1, name: "iphone", date: new Date().toDateString() },
  { id: 2, name: "macbook", date: new Date().toDateString() },
];

app.innerHTML = buildProductListHtml(productList);

console.log(buildProductListHtml(productList));

function handleOnDeleteButtonClick(name) {
  productList = productList.filter((product) => product.name !== name);
  app.innerHTML = buildProductListHtml(productList);
}

function buildProductListHtml(productList) {
  let productListHtml = "<ul>";

  for (const product of productList) {
    productListHtml += buildProductHtml(product);
  }

  productListHtml += "</ul>";

  return productListHtml;
}

function buildProductHtml(product) {
  let li = `
    <li>
      ${product.name} -
      ${product.date}
      <span
        onClick="handleOnDeleteButtonClick('${product.name}')"
        style="color: red; cursor: pointer"
      >
        Delete
      </span>
    </li>
  `;

  return li;
}
