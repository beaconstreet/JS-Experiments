//create grid of squares
for (let i = 0; i < 256; i++) {
  const makeSquare = document.createElement("div");
  makeSquare.classList.add("gridStyle");
  gridContainer.appendChild(makeSquare);
}

//create singleSquare to find solo square, and then looping through them to mouseover effect
const singleSquare = gridContainer.getElementsByClassName("gridStyle");
for (let i = 0; i < 256; i++) {
  singleSquare[i].addEventListener("mouseover", () => {
    singleSquare[i].style.backgroundColor = "yellow";
  });
}

//custom grid script
let userGridNumber = "";
const customGridPrompt = document.getElementById("customGrid");

customGridPrompt.addEventListener("click", () => {
  // event Listener for custom grid button
  userGridNumber = prompt(
    "How many squares wide should the new grid be?",
    "max 100"
  );
  let userGridConstant = 800 / userGridNumber; // container width divided by the custom number

  if (userGridNumber > 100 || userGridNumber < 0) {
    //conditional checking for custom number < 100
    alert("Sorry, it needs to be a number less than 100");
  }

  if (userGridNumber != "" && userGridNumber <= 100) {
    gridContainer.innerHTML = "";
    let userGridNumberTotal = userGridNumber ** 2;
    for (let i = 0; i < userGridNumberTotal; i++) {
      const makeSquare = document.createElement("div");
      makeSquare.classList.add("gridStyle");
      makeSquare.style.width = userGridConstant - 2 + "px";
      makeSquare.style.height = userGridConstant - 2 + "px";
      gridContainer.appendChild(makeSquare);
    }
  }
  const singleSquareCustom = gridContainer.getElementsByClassName("gridStyle");

  for (let i = 0; i < singleSquareCustom.length; i++) {
    singleSquareCustom[i].addEventListener("mouseover", () => {
      singleSquareCustom[i].style.backgroundColor = "yellow";
    });
  }
});
