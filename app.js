const products = ['Manzana', 'Plátano', 'Leche'];

function renderList() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product;
    list.appendChild(li);
  });
}

renderList();
