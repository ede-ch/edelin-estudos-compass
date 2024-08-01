const estagiarios = [
  "André Luiz", "Angelo de Oliveira", "Antonio Francisco", "Carlos Eduardo",
  "Davi Enrique", "Diego Bueno", "Edelin Chaves", "Edenilson Costa", 
  "Edmar Miller", "Erik Miqueias", "Erik Ricarde", "Gabriel Bezerra", 
  "Guilherme Caneda", "Iago Mendes", "Isabella Gama", "João André", 
  "João Carlos", "João Pedro", "Liliv Hana", "Lucas Correa", 
  "Luiz Raquel", "Maithe Saldanha", "Mateus Rosa", "Mauricio Lamberti", 
  "Ricardo Luiz", "Ronaldy Samias", "Ruan Vinicius", "Samuel da Silva", 
  "Tales Schifelbein", "Thais dos Santos", "Thais Nicodemus", 
  "Tiago Pedroso", "Wuesley Nogueira"
];

// Função para adicionar os nomes de forma dinâmica.
const lista = document.querySelector('#list');
estagiarios.forEach(estagiario => {
const itemLista = document.createElement('li');
itemLista.classList.add('card');
itemLista.innerHTML = `
  <div class="profile-card">
    <div class="info">
      <h3>${estagiario}</h3>
      <p>${gerarEmail(estagiario)}</p>
    </div>
  </div>
`;
lista.appendChild(itemLista);
});

// Função para gerar os emails a partir do nome.
function gerarEmail(nome) {
  const nomeEmail = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '.').replace(/[^\w.]+/g, '');
  return `${nomeEmail}@pb.com`;
}

// Função de pesquisa.
const pesquisa = document.querySelector('#search');
pesquisa.addEventListener('input', () => {
const valor = pesquisa.value.toLowerCase();
const itens = lista.getElementsByTagName('li');
Array.from(itens).forEach((item) => {
  const texto = item.textContent.toLowerCase();
  if (texto.indexOf(valor) !== -1) {
    item.style.display = 'block';
  } else {
    item.style.display = 'none';
  }
});
});
