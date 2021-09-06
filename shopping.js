const ui = document.getElementById("products");

const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProduct(name);
  }
};

const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;
  // display in the UI
  displayProduct(name);
  // add to local storage
  addProductToCart(name);
  nameField.value = "";
};

const displayProduct = (name) => {
  const li = document.createElement("li");
  li.innerText = name;
  ui.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  cart ? (cartObj = JSON.parse(cart)) : (cartObj = {});
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCart();
  cart[name] ? (cart[name] += 1) : (cart[name] = 1);

  console.log(cart);
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const purChase = () => {
  ui.textContent = "";
  localStorage.removeItem("cart");
};
displayLocalStorageCart();
