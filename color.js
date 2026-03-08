
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#'
  for (let i = 0; i < 6; i++) {
    const randomIndex = (Math.floor(Math.random() * 16));
    color += letters[randomIndex];
  }
  return color;
}

function createCard(color) {
  const card = document.createElement("div");
  card.setAttribute("class", "color-card");
  card.style.backgroundColor = color;

  const code = document.createElement("span");
  code.setAttribute("class", "color-code");
  code.textContent = color;

  card.append(code);



  return card;


}
function generatePalette() {
  const palette = document.querySelector("#colorPalette");
  palette.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const randomColor = getRandomColor();
    const card = createCard(randomColor);
    palette.append(card);
  }


}

const generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener("click", generatePalette);

generatePalette();


 