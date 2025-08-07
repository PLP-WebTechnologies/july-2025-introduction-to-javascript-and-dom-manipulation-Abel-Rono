let userName = "";

function greetUser() {
  userName = document.getElementById("name").value;

  const greetingEl = document.getElementById("greeting");

  if (userName) {
    greetingEl.textContent = `Hello, ${userName}! 👋`;
  } else {
    greetingEl.textContent = "Please enter your name.";
  }
}


function calculateTotal(cartItems) {
  let total = 0;
  for (let item of cartItems) {
    total += item;
  }
  return total;
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function showTotal() {
  const cart = [9.99, 14.99, 4.99, 19.99]; 
  const total = calculateTotal(cart);
  document.getElementById("total-result").textContent = `Total: ${formatCurrency(total)}`;
}

function startCountdown() {
  const list = document.getElementById("countdown-list");
  list.innerHTML = ""; 

  for (let i = 10; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

const fruits = ["🍎 Apple", "🍌 Banana", "🍓 Strawberry", "🍇 Grape"];

fruits.forEach(fruit => {
  const li = document.createElement("li");
  li.textContent = fruit;
  document.getElementById("fruits-list").appendChild(li);
});

