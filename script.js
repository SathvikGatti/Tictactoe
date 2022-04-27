let row = [0, 0, 0];
let col = [0, 0, 0];
let Diag1 = 0;
let Diag2 = 0;
let flag = true;

function fireFunc(index) {
  let i = parseInt(index[0]),
    j = parseInt(index[1]);
  var ele = document.getElementById("f" + i + j);
  if (ele.classList.length > 2) return;
  if (flag) {
    ele.classList.add("cross");
    row[j]++;
    col[i]++;
    if (i + j == 2) Diag1++;
    if (i == j) Diag2++;
    if (Diag1 == 3 || col[i] == 3 || row[j] == 3 || Diag2 == 3) {
      console.log("Cross wins!");
      Res("Cross");
    }
  } else {
    ele.classList.add("circle");
    row[j]--;
    col[i]--;
    if (i + j == 2) Diag1--;
    if (i == j) Diag2--;
    if (Diag1 == -3 || col[i] == -3 || row[j] == -3 || Diag2 == -3) {
      console.log("Circle wins!");
      Res("Circle");
    }
  }
  //   console.log(i + j);
  console.log("--------");
  console.log(row, col);
  console.log(Diag1, Diag2);
  flag = !flag;
}

function Res(val) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.getElementById("f" + i + j).onclick = "#";
    }
  }
  document.querySelector(".Result").style.display = "block";
  var res = document.querySelector("h1");
  var mes = document.querySelector("h4");
  res.innerHTML = val + "Wins !";
  mes.innerHTML = "Referesh to play again!";
}
