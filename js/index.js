// blog btn
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./home.html";
  console.log(clicked);
});

// features section Donate button
document.getElementById("donate-btn").addEventListener("click", function () {
  const donateSection = document.getElementById("donate-section");
  donateSection.classList.remove("hidden");
  const historySection = document.getElementById("history");
  historySection.classList.add("hidden");

  const historyBtnStyle = document.getElementById("history-btn");
  historyBtnStyle.classList.remove("btn-color");
  const donateBtnStyle = document.getElementById("donate-btn");
  donateBtnStyle.classList.add("btn-color");
});
// features section history button
document.getElementById("history-btn").addEventListener("click", function () {
  const historyBtnStyle = document.getElementById("history-btn");
  historyBtnStyle.classList.add("btn-color");

  const historySection = document.getElementById("history");
  historySection.classList.remove("hidden");

  const donateSection = document.getElementById("donate-section");
  donateSection.classList.add("hidden");

  const donateBtnStyle = document.getElementById("donate-btn");
  donateBtnStyle.classList.remove("btn-color");
});
// noakhali section start
document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("input-noakhali").value;
    const inputNumber = parseFloat(inputValue);
    const balance = parseFloat(document.getElementById("balance").innerText);
    const title = document.getElementById("noakhaliTitle").innerText;

    if (inputNumber <= 0 || !isNaN(inputNumber)) {
      //   alert("Please enter a valid number");
      if (inputNumber > balance) {
        alert("Insufficient balance");
        return;
      }

      const totalBalance = balance - inputNumber;
      document.getElementById("balance").innerText = totalBalance;
      const donateAmount = parseFloat(
        document.getElementById("donate-result-show-noakhli").innerText
      );
      const totalDonateAmount = inputNumber + donateAmount;
      document.getElementById("donate-result-show-noakhli").innerText =
        totalDonateAmount;

      document.getElementById("input-noakhali").value = "";
      alert("Congrats you are successfully Donate!");

      //creating div for history
      const div = document.createElement("div");
      div.classList.add("border");
      div.classList.add("p-5");
      div.innerHTML = `<p class="text-xl font-semibold">${inputNumber} Taka is
                        Donated For ${title}</p>
                        <p class = "text-xs"> Date: ${new Date()}</p>`;
      document.getElementById("history").appendChild(div);
    } else {
      alert("Please enter a valid number");
      return;
    }
  });
