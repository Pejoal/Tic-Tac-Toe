const c = console.log.bind(document);

let numbers = 9;
let i = 1;
let fragment = new DocumentFragment();
while (i <= numbers) {
  // c(i);
  const section = document.createElement("section");
  // section.append(i);
  section.setAttribute("data-number", i);
  fragment.append(section);
  i++;
}
// c(fragment);
main.appendChild(fragment);

let win = false;
let turn = "O";
let Os = [];
let Xs = [];
document.querySelectorAll("main > *").forEach((sect) => {
  sect.addEventListener("click", (ele) => {
    // c(ele.target);
    // if (ele.target.innerHTML) {
    //   c(ele.target.innerHTML);
    // }
    if (turn === "O" && !ele.target.innerHTML) {
      // ele.target.innerHTML = ele.target.dataset.number;
      ele.target.innerHTML = "O";
      ele.target.style.color = "#2f1";
      Os.push(+ele.target.dataset.number);
      if (checkIfOneWins(Os)) {
        endGame("O");
      }
      turn = "X";
    } else if (turn === "X" && !ele.target.innerHTML) {
      // ele.target.innerHTML = ele.target.dataset.number;
      ele.target.innerHTML = "X";
      ele.target.style.color = "#f24";
      Xs.push(+ele.target.dataset.number);
      if (checkIfOneWins(Xs)) {
        endGame("X");
      }
      turn = "O";
    }
    if (Xs.length + Os.length === 9 && win === false) {
      output.style.display = "flex";
      output.innerHTML = "Draw";
      document.querySelectorAll("main > *").forEach((sect) => {
        sect.classList.add("disabled");
      });
    }
  });
});

function checkIfOneWins(position) {
  if (
    (position.includes(1) && position.includes(2) && position.includes(3)) ||
    (position.includes(1) && position.includes(4) && position.includes(7)) ||
    (position.includes(1) && position.includes(5) && position.includes(9)) ||
    (position.includes(2) && position.includes(5) && position.includes(8)) ||
    (position.includes(3) && position.includes(5) && position.includes(7)) ||
    (position.includes(3) && position.includes(6) && position.includes(9)) ||
    (position.includes(4) && position.includes(5) && position.includes(6)) ||
    (position.includes(7) && position.includes(8) && position.includes(9))
  ) {
    return true;
  } else {
    return false;
  }
}

const endGame = (team) => {
  win = true;
  output.style.display = "flex";
  output.innerHTML = `${team} Wins`;
  document.querySelectorAll("main > *").forEach((sect) => {
    sect.classList.add("disabled");
  });
};

// let n = [1, 2, 3];
// let o = [1, 2];
// if (n.includes(1)) {
//   c("good");
// } else {
//   c("bad");
// }
