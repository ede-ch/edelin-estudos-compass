const interns = [
  "André Luiz",
  "Angelo de Oliveira",
  "Antonio Francisco",
  "Carlos Eduardo",
  "Davi Enrique",
  "Diego Bueno",
  "Edelin Chaves",
  "Edenilson Costa",
  "Edmar Miller",
  "Erik Miqueias",
  "Erik Ricarde",
  "Gabriel Bezerra",
  "Guilherme Caneda",
  "Iago Mendes",
  "Isabella Gama",
  "João André",
  "João Carlos",
  "João Pedro",
  "Liliv Hana",
  "Lucas Correa",
  "Luiz Raquel",
  "Maithe Saldanha",
  "Mateus Rosa",
  "Mauricio Lamberti",
  "Ricardo Luiz",
  "Ronaldy Samias",
  "Ruan Vinicius",
  "Samuel da Silva",
  "Tales Schifelbein",
  "Thais dos Santos",
  "Thais Nicodemus",
  "Tiago Pedroso",
  "Wuesley Nogueira",
];

// Função para adicionar os nomes de forma dinâmica.
const list = document.querySelector("#list");
interns.forEach((intern) => {
  const listItem = document.createElement("li");
  listItem.classList.add("card");
  listItem.innerHTML = `
  <div class="profile-card">
    <div class="info">
      <h3>${intern}</h3>
      <p>${generateEmail(intern)}</p>
    </div>
  </div>
`;
  list.appendChild(listItem);
});

// Função para gerar os emails a partir do nome.
function generateEmail(name) {
  const Emailname = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, ".")
    .replace(/[^\w.]+/g, "");
  return `${Emailname}@pb.com`;
}

// Função de pesquisa.
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const items = list.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.indexOf(value) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
