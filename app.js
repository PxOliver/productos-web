const products = ['Manzana', 'Plátano', 'Leche'];

function addProductFromInput() {
  const input = document.getElementById('product-name');
  const name = input.value.trim();
  if (!name) {
    alert('Ingresa un nombre válido');
    return;
  }
  products.push(name);
  renderList();
  input.value = '';
  input.focus();
}

function renderList() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product;
    list.appendChild(li);
  });
}

document.getElementById('add-btn').addEventListener('click', addProductFromInput);
document.getElementById('product-name').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addProductFromInput();
});

renderList();
