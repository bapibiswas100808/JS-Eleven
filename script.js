// function getFormValue() {
//   //
//   const nameInput = document.getElementById("full-name");
//   const nameValue = nameInput.value;
//   const errorText = document.getElementById("error-text");
//   // console.log(nameInput);
//   // console.log(nameValue);

//   if (nameValue) {
//     console.log(nameValue);
//     errorText.innerText = "";
//     nameInput.value = "";
//   } else {
//     errorText.innerHTML = '<p class="text-warning">Please write your name!</p>';
//     // alert("write your name");
//   }
// }

// Add event listener
// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", getFormValue);
// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function () {
//   const nameInput = document.getElementById("full-name");
//   const emailInput = document.getElementById("email-adress");
//   const adressInput = document.getElementById("full-adress");
//   const nameValue = nameInput.value;
//   const emailValue = emailInput.value;
//   const adressValue = adressInput.value;
//   const errorText = document.getElementById("error-text");
//   const formData = document.getElementById("form-data");
//   // console.log(nameInput);
//   // console.log(nameValue);

//   if (nameValue && emailValue && adressValue) {
//     console.log(nameValue, emailValue, adressValue);
//     formData.innerHTML = `<p>Form Submitted by: ${nameValue}, ${adressValue},${adressValue}</p>`;
//     errorText.innerText = "";
//     nameInput.value = "";
//     emailInput.value = "";
//     adressInput.value = "";
//   } else {
//     errorText.innerHTML =
//       '<p class="text-warning">Please fill the form correctly!</p>';
//     formData.innerHTML = "";
//     // alert("write your name");
//   }
// });

const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", function calculateValue() {
  const income = document.getElementById("income").innerHTML;
  const rentInput = document.getElementById("rent");
  const foodInput = document.getElementById("food");
  const utilitiesInput = document.getElementById("utilities");
  const insuranceInput = document.getElementById("insurance");
  const expensesDiv = document.getElementById("expenses");
  const balanceDiv = document.getElementById("balance");
  const errorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");
  const commentData = document.getElementById("comment-data");

  const incomeValue = parseFloat(income);
  const rentValue = parseFloat(rentInput.value);
  const foodValue = parseFloat(foodInput.value);
  const utilitiesValue = parseFloat(utilitiesInput.value);
  const insuranceValue = parseFloat(insuranceInput.value);

  if (
    rentValue >= 0 &&
    foodValue >= 0 &&
    utilitiesValue >= 0 &&
    insuranceValue >= 0
  ) {
    const cost = rentValue + foodValue + utilitiesValue + insuranceValue;
    const balance = incomeValue - cost;
    expensesDiv.innerText = cost;
    balanceDiv.innerText = balance;
    errorText.innerHTML = "";
    rentInput.value = "";
    foodInput.value = "";
    utilitiesInput.value = "";
    insuranceInput.value = "";
    formData.innerHTML = `<p>Rent + Food + Utilities + Insurance = ${rentValue} + ${foodValue} + ${utilitiesValue} + ${insuranceValue} </p>`;
  } else {
    errorText.innerHTML = "Please input every field by numbers!";
    expensesDiv.innerText = "";
    balanceDiv.innerText = "";
    formData.innerHTML = "";
    commentData.innerHTML = "";
  }

  const balanceLeft = balanceDiv.innerText;
  if (balanceLeft >= 10000) {
    commentData.innerHTML = "<p>Excellent Savings!</p>";
  } else if (balanceLeft >= 5000) {
    commentData.innerHTML = "<p>Good Savings!</p>";
  } else if (balanceLeft >= 1) {
    commentData.innerHTML = "<p>Savings is not Enough!</p>";
  } else {
    commentData.innerHTML = "";
  }

  // const cost = rentValue + foodValue + utilituesValue + insuranceValue;
  // const balance = incomeValue - cost;
  // expensesDiv.innerText = cost;
  // balanceDiv.innerText = balance;
});
