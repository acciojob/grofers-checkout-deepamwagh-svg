const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceCells = document.querySelectorAll(".price");

  let total = 0;

  priceCells.forEach((cell) => {
    total += Number(cell.textContent);
  });

  const table = document.querySelector("table");

  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2");

  totalCell.textContent = `Total Price = Rs ${total}`;
  newRow.appendChild(totalCell);

  table.appendChild(newRow);

  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

