// Data Arrays
let products = [
  { name: "iPhone x", price: 400 },
  { name: "iPhone 11", price: 450 },
  { name: "iPhone 12", price: 500 },
  { name: "iPhone 13", price: 550 },
  { name: "iPhone 14", price: 600 },
  { name: "iPhone 15", price: 700 },
];
let fatoraContent = [
  // Dummy Data
  //   { name: "iPhone x", price: 400, qty: 2 },
  //   { name: "iPhone x", price: 550, qty: 3 },
];
// Selectors
let containerDiv = document.querySelector("#productsContainer");
let tbody = document.querySelector("table tbody");
let span = document.querySelector("table tfoot span");
// Renders
let renderProducts = () => {
  products.forEach((el, index) => {
    containerDiv.innerHTML += `
        <button class="btn btn-primary" onclick="addProductToFatora(${index})">
          ${el.name} [${el.price} $]
        </button>`;
  });
};

let renderFatoraContent = () => {
  tbody.innerHTML = "";
  fatoraContent.forEach((el, index) => {
    tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price}</td>
                <td><button onclick="decrementQty(${index})" class="btn btn-danger">-</button> ${
      el.qty
    } <button onclick="incrementQty(${index})" class="btn btn-success">+</button> </td>
                <td>${el.qty * el.price}</td>
                <td>
                    <button onclick="removeProduct(${index})">Remove</button>
                </td>
            </tr>
        `;
  });
  getTotal();
};

let addProductToFatora = (index) => {
  let product = products[index];
  product.qty = 1;
  fatoraContent.push(product);
  renderFatoraContent();
};

let incrementQty = (index) => {
  let product = fatoraContent[index];
  product.qty++;
  renderFatoraContent();
  // console.log(product);
};
let decrementQty = (index) => {
  let product = fatoraContent[index];
  if (product.qty > 1) {
    product.qty--;
  }
  renderFatoraContent();
};

let removeProduct = (index) => {
  fatoraContent.splice(index, 1);
  renderFatoraContent();
};

let getTotal = () => {
  let total = 0;
  fatoraContent.forEach((el, index) => {
    total = total + el.qty * el.price;
  });
  span.innerText = total;
  //   return
};
// Default Runs
renderProducts();
renderFatoraContent();

// let useInfo = {name : "Ali"};
// useInfo.age = 20;
