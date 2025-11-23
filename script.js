const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
    let total = 0;

  prices.forEach((p) => {
    total += Number(p.innerText);
  });

  const ansBox = document.getElementById("ans");
  ansBox.textContent = total;
};
getSumBtn.addEventListener("click", getSum);

