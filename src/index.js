// const addToCartButtons = document.querySelectorAll(".add_to_cart button");
// const selectedSections = document.querySelectorAll(".selected");
// const itemImage = document.querySelectorAll(".item_image img");

// const addUnitIcons = document.querySelectorAll(".fa-plus");
// const removeUnitIcons = document.querySelectorAll(".fa-minus");
// const unitFields = document.querySelectorAll(".unit");

// const cartItemsContainer = document.querySelector(".cart_items");
// const totalElement = document.querySelector(".to_be_paid");
// const cartQuantityElement = document.querySelector(".cart h2 p"); // Cart quantity display
// const emptyCart = document.querySelector(".empty_cart");
// const cartWithItems = document.querySelector(".cart_with_items");

// let cart = {};

// const updateCart = () => {
//   cartItemsContainer.innerHTML = "";

//   let total = 0;
//   let totalQuantity = 0; // To keep track of total quantity

//   Object.entries(cart).forEach(([itemName, itemDetails]) => {
//     const { price, quantity } = itemDetails;

//     const cartItem = document.createElement("li");
//     cartItem.classList.add("product");

//     cartItem.innerHTML = `
//       <h2>${itemName}</h2>
//       <div class="product_price">
//         <div class="calc">
//           <p class="quantity">${quantity}x</p>
//           <p class="selling_price">@ ₦${price.toLocaleString()}</p>
//           <p class="final_price">₦${(price * quantity).toLocaleString()}</p>
//         </div>
//         <i class="bi bi-x-circle" onclick="removeFromCart('${itemName}')"></i>
//       </div>
//     `;

//     cartItemsContainer.appendChild(cartItem);
//     total += price * quantity;
//     totalQuantity += quantity; // Update the total quantity
//   });

//   totalElement.textContent = `₦${total.toLocaleString()}`;
//   cartQuantityElement.textContent = `(${totalQuantity})`; // Update cart quantity display

//   // Toggle visibility of cart sections
//   if (totalQuantity === 0) {
//     emptyCart.style.display = "flex";
//     cartWithItems.style.display = "none";
//   } else {
//     emptyCart.style.display = "none";
//     cartWithItems.style.display = "flex";
//   }
// };

// function addToCart(itemName, price) {
//   if (cart[itemName]) {
//     cart[itemName].quantity += 1;
//   } else {
//     cart[itemName] = { price: price, quantity: 1 };
//   }

//   updateCart();
// }

// function removeFromCart(itemName) {
//   delete cart[itemName];
//     //   itemImage[itemName].classList.remove("item_border");

//   updateCart();
// }

// addToCartButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     button.parentElement.classList.add("hidden");
//       selectedSections[index].classList.add("active");
//       itemImage[index].classList.add("item_border");

//     const itemElement = event.target.closest(".item");
//     const itemName = itemElement.querySelector(
//       ".item_description h2"
//     ).textContent;
//     const itemPriceText = itemElement.querySelector(".item_price").textContent;
//     const itemPrice = parseFloat(
//       itemPriceText.replace("₦", "").replace(".", "").replace(",", "")
//     );

//     addToCart(itemName, itemPrice);
//   });
// });

// addUnitIcons.forEach((plusIcon, index) => {
//   plusIcon.addEventListener("click", (event) => {
//     // Update unit display
//     let unit = parseInt(unitFields[index].innerText);
//     unit += 1;
//     unitFields[index].innerText = unit;

//     // Find item details
//     const itemElement = event.target.closest(".item");
//     const itemName = itemElement.querySelector(
//       ".item_description h2"
//     ).textContent;
//     const itemPriceText = itemElement.querySelector(".item_price").textContent;
//     const itemPrice = parseFloat(
//       itemPriceText.replace("₦", "").replace(".", "").replace(",", "")
//     );

//     // Update cart quantity
//     cart[itemName].quantity = unit;
//     updateCart(); // Refresh the cart display
//   });
// });

// removeUnitIcons.forEach((minusIcon, index) => {
//   minusIcon.addEventListener("click", (event) => {
//     // Get current unit value
//     let unit = parseInt(unitFields[index].innerText);

//     // Get item details
//     const itemElement = event.target.closest(".item");
//     const itemName = itemElement.querySelector(
//       ".item_description h2"
//     ).textContent;
//     const itemPriceText = itemElement.querySelector(".item_price").textContent;
//     const itemPrice = parseFloat(
//       itemPriceText.replace("₦", "").replace(".", "").replace(",", "")
//     );

//     // If unit is greater than 1, decrease the value
//     if (unit > 1) {
//       unit -= 1;
//       unitFields[index].innerText = unit;

//       // Update the cart quantity
//       cart[itemName].quantity = unit;
//       updateCart(); // Refresh the cart display
//     }
//     // If unit is 1, remove the item from the cart
//     else if (unit === 1) {
//       removeFromCart(itemName);

//       // Hide the selected section and show the add to cart button
//       selectedSections[index].classList.remove("active");
//         addToCartButtons[index].parentElement.classList.remove("hidden");
//               itemImage[index].classList.remove("item_border");

//     }
//   });
// });

const addToCartButtons = document.querySelectorAll(".add_to_cart button");
const selectedSections = document.querySelectorAll(".selected");
const itemImage = document.querySelectorAll(".item_image img");

const addUnitIcons = document.querySelectorAll(".fa-plus");
const removeUnitIcons = document.querySelectorAll(".fa-minus");
const unitFields = document.querySelectorAll(".unit");

const cartItemsContainer = document.querySelector(".cart_items");
const totalElement = document.querySelector(".to_be_paid");
const cartQuantityElement = document.querySelector(".cart h2 p"); // Cart quantity display
const emptyCart = document.querySelector(".empty_cart");
const cartWithItems = document.querySelector(".cart_with_items");

let cart = {};

const updateCart = () => {
  cartItemsContainer.innerHTML = "";

  let total = 0;
  let totalQuantity = 0; // To keep track of total quantity

  Object.entries(cart).forEach(([itemName, itemDetails]) => {
    const { price, quantity } = itemDetails;

    const cartItem = document.createElement("li");
    cartItem.classList.add("product");

    cartItem.innerHTML = `
      <h2>${itemName}</h2>
      <div class="product_price">
        <div class="calc">
          <p class="quantity">${quantity}x</p>
          <p class="selling_price">@ ₦${price.toLocaleString()}</p>
          <p class="final_price">₦${(price * quantity).toLocaleString()}</p>
        </div>
      </div>
      <div class="divider"></div>
    `;

    cartItemsContainer.appendChild(cartItem);
    total += price * quantity;
    totalQuantity += quantity;
  });

  totalElement.textContent = `₦${total.toLocaleString()}`;
  cartQuantityElement.textContent = `(${totalQuantity})`;

  if (totalQuantity === 0) {
    emptyCart.style.display = "flex";
    cartWithItems.style.display = "none";
  } else {
    emptyCart.style.display = "none";
    cartWithItems.style.display = "flex";
  }
};

function addToCart(itemName, price) {
  if (cart[itemName]) {
    cart[itemName].quantity += 1;
  } else {
    cart[itemName] = { price: price, quantity: 1 };
  }

  updateCart();
}

function clearCart() {
  cart = {};
  updateCart();
  selectedSections.forEach((section, index) => {
    section.classList.remove("active"); // Hide the selected section
    addToCartButtons[index].parentElement.classList.remove("hidden"); // Show the "Add to Cart" button
    itemImage[index].classList.remove("item_border"); // Remove the item border
  });
}

document.getElementById("clearCartButton").addEventListener("click", () => {
  clearCart();
});

function removeFromCart(itemName) {
  delete cart[itemName];
  updateCart();
}

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    button.parentElement.classList.add("hidden");
    selectedSections[index].classList.add("active");
    itemImage[index].classList.add("item_border");

    const itemElement = event.target.closest(".item");
    const itemName = itemElement.querySelector(
      ".item_description h2"
    ).textContent;
    const itemPriceText = itemElement.querySelector(".item_price").textContent;
    const itemPrice = parseFloat(
      itemPriceText.replace("₦", "").replace(".", "").replace(",", "")
    );

    addToCart(itemName, itemPrice);
  });
});

addUnitIcons.forEach((plusIcon, index) => {
  plusIcon.addEventListener("click", (event) => {
    // Update unit display
    let unit = parseInt(unitFields[index].innerText);
    unit += 1;
    unitFields[index].innerText = unit;

    // Find item details
    const itemElement = event.target.closest(".item");
    const itemName = itemElement.querySelector(
      ".item_description h2"
    ).textContent;
    const itemPriceText = itemElement.querySelector(".item_price").textContent;
    const itemPrice = parseFloat(
      itemPriceText.replace("₦", "").replace(".", "").replace(",", "")
    );

    // Update cart quantity
    cart[itemName].quantity = unit;
    updateCart(); // Refresh the cart display
  });
});

removeUnitIcons.forEach((minusIcon, index) => {
  minusIcon.addEventListener("click", (event) => {
    // Get current unit value
    let unit = parseInt(unitFields[index].innerText);

    // Get item details
    const itemElement = event.target.closest(".item");
    const itemName = itemElement.querySelector(
      ".item_description h2"
    ).textContent;
    const itemPriceText = itemElement.querySelector(".item_price").textContent;
    const itemPrice = parseFloat(
      itemPriceText.replace("₦", "").replace(".", "").replace(",", "")
    );

    // If unit is greater than 1, decrease the value
    // if (unit > 1) {
    unit -= 1;
    if (unit > 0) {
      unitFields[index].innerText = unit;

      // Update the cart quantity
      cart[itemName].quantity = unit;
      updateCart(); // Refresh the cart display
    }
    // If unit is 1, remove the item from the cart
    else if (unit === 0) {
      removeFromCart(itemName);

      // Hide the selected section and show the add to cart button
      selectedSections[index].classList.remove("active");
      addToCartButtons[index].parentElement.classList.remove("hidden");
      itemImage[index].classList.remove("item_border");
    }
  });
});

const confirmOrderList = document.getElementById("confirmedOrderList");
const confirmOrderButton = document.getElementById("confirmOrderButton");
const aside = document.querySelector("aside");

confirmOrderButton.addEventListener("click", () => {
  confirmOrderList.innerHTML = "";

  let total = 0;

  // Iterate through cart items
  Object.entries(cart).forEach(([itemName, itemDetails]) => {
    const price = parseFloat(itemDetails.price); // Ensure price is a number
    const quantity = parseInt(itemDetails.quantity, 10); // Ensure quantity is an integer

    // Log the price and quantity to check if they are correct
    // console.log(`Price: ${price}, Quantity: ${quantity}`);

    const confirmedOrderItem = document.createElement("li");
    confirmedOrderItem.classList.add("confirmed-order-item");

    // Populate the list item with formatted HTML content
    confirmedOrderItem.innerHTML = `
      <h2>${itemName}</h2>
      <div class="confirmed_item_product_price">
        <div class="confirmed_item_calc">
          <p class="confirmed_item_quantity">${quantity}x</p>
          <p class="confirmed_item_selling_price">@ ₦${price.toLocaleString()}</p>
          <p class="confirmed_item_final_price">₦${(
            price * quantity
          ).toLocaleString()}</p>
        </div>
      </div>
      <div class="divider"></div>
    `;

    // Append the formatted list item to the confirmed order list
    confirmOrderList.appendChild(confirmedOrderItem);

    // Accumulate the total
    total += price * quantity;
  });

  // Log total to ensure the calculation is correct
//   console.log(`Total: ${total}`);

  const totalElement = document.querySelector(".confirmed_item_to_be_paid");
  if (totalElement) {
    // Update the total amount in the DOM
    totalElement.textContent = `₦${total.toLocaleString()}`;
  } else {
    console.error("Total element not found!");
  }

  aside.style.display = "flex"; // Show confirmed order section
});


const startNewOrder = document.getElementById("startNewOrder");

startNewOrder.addEventListener('click', () => {
  clearCart();
  aside.style.display = "none";
});