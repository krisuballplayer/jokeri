const lista = document.querySelector("table");
const riveja = document.querySelector("p");
const nappi = document.querySelector("button");

let riviLaskuri = 0;

const addNumber = () => {
  riviLaskuri += 1;
  const rivi = lista.insertRow();
  for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    const col1 = rivi.insertCell(0);
    col1.innerHTML = randomNumber;
    riveja.innerHTML = "Valmiita rivejä: " + riviLaskuri;
  }
};

nappi.addEventListener("click", () => {
  addNumber();
});
