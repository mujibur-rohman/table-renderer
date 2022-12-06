const inputRow = document.querySelector('.row');
const inputCol = document.querySelector('.col');
const renderButton = document.querySelector('.render');
const table = document.querySelector('.table');

let row = 0;
let col;

inputRow.addEventListener('change', function (e) {
  row = e.target.value;
});

inputCol.addEventListener('change', function (e) {
  col = e.target.value;
});

renderButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (document.querySelectorAll('tr')) {
    document.querySelectorAll('tr').forEach((tr) => tr.remove());
  }
  for (let r = 1; r <= row; r++) {
    const tr = document.createElement('tr');
    for (let c = 1; c <= col; c++) {
      const td = document.createElement('td');
      td.innerText = `Row ${r} Col ${c}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
});
