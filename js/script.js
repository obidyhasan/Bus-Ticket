// Seat clicked
let seatArray = [];
let totalPrice = 0;
let grandPrice = 0;
let checkCount = 0;
let calculateDiscount = 0;
const listContainer = document.getElementById("bookedListContainer");
const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const emailInput = document.getElementById("emailInput");
const couponInput = document.getElementById("couponInput");
const couponApply = document.getElementById("couponApply");
const nextBtn = document.getElementById("nextBtn");

function selectSeatFunction(event) {
  const seatName = event.innerText;

  // Validation
  if (seatArray.includes(seatName)) {
    alert("Seat all ready selected");
    return;
  }

  if (seatArray.length > 3) {
    alert("Maximum seat are Booked!");
    return;
  }

  checkCount++;
  if (checkCount != 0) {
    nameInput.removeAttribute("disabled");
    emailInput.removeAttribute("disabled");
    numberInput.removeAttribute("disabled");
  }

  if (checkCount > 3) {
    couponInput.removeAttribute("disabled");
    couponApply.removeAttribute("disabled");
  }

  // Button Selected
  event.classList.add("bg-primary", "text-white");
  //  Add to array
  seatArray.push(seatName);
  // Add to List
  listContainer.innerHTML += `
        <li class="text-sm font-medium text-gray-500 grid grid-cols-3 my-3">
            <span>${seatName}</span>
            <span>Economy</span>
            <span class="text-right">550</span>
        </li>`;
  // Hide Not booked text
  document.getElementById("notBookedText").classList.add("hidden");
  // get count text
  let count = getInnerTextById("countSeat");
  count++;
  setInnerTextById("countSeat", count);
  // decrease for total seat
  let total = getInnerTextById("totalSeat");
  total--;
  setInnerTextById("totalSeat", total);

  // Update Total Price
  totalPrice += 550;
  setInnerTextById("totalPrice", totalPrice);
}

// Coupon Input
couponApply.addEventListener("click", function () {
  if (couponInput.value === "NEW15") {
    calculateDiscount = totalPrice * 0.15;
    grandPrice = totalPrice - calculateDiscount;
    setInnerTextById("grandPrice", grandPrice);
  } else if (couponInput.value === "Couple 20") {
    calculateDiscount = totalPrice * 0.2;
    grandPrice = totalPrice - calculateDiscount;
    setInnerTextById("grandPrice", grandPrice);
  } else {
    alert("Invalid coupon");
  }
});

numberInput.addEventListener("input", function (event) {
  let value = event.target.value;

  if (value.length === 11) {
    nextBtn.removeAttribute("disabled");
  }
});

document.getElementById("continueBtn").addEventListener("click", function () {
  window.location.reload();
});
