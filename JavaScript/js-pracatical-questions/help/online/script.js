let cartItems = [];
let totalPrice = 0;

function addItem(price) {
  cartItems.push(price);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total-price");
  totalPrice = cartItems.reduce((acc, curr) => acc + curr, 0);
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `$${item}`;
    cartList.appendChild(li);
  });
  totalSpan.textContent = totalPrice;
}

function applyDiscount() {
  let discount = 0;
  if (totalPrice >= 50) {
    discount = 10;
    document.getElementById("discount-msg").textContent =
      "You got a $10 discount!";
  } else if (totalPrice >= 30) {
    discount = 5;
    document.getElementById("discount-msg").textContent =
      "You got a $5 discount!";
  } else {
    document.getElementById("discount-msg").textContent =
      "No discount applied.";
  }
  totalPrice -= discount;
  document.getElementById("total-price").textContent = totalPrice;
}
