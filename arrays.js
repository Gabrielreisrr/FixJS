// Array de objetos - Lista de produtos
const produtos = [
    { id: 1, nome: 'Camiseta', categoria: 'Roupas', preco: 59.99 },
    { id: 2, nome: 'Tênis', categoria: 'Calçados', preco: 199.99 },
    { id: 3, nome: 'Boné', categoria: 'Acessórios', preco: 39.99 },
    { id: 4, nome: 'Jaqueta', categoria: 'Roupas', preco: 149.99 },
    { id: 5, nome: 'Óculos', categoria: 'Acessórios', preco: 129.99 },
  ];
  
  // 1. Usando o método map para criar um novo array com o nome e preço dos produtos
  const nomesEprecos = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco
  }));
  
  console.log('Nomes e Preços dos Produtos:', nomesEprecos);
  
  // 2. Usando o método filter para filtrar produtos que são de roupas
  const roupas = produtos.filter(produto => produto.categoria === 'Roupas');
  
  console.log('Produtos de Roupas:', roupas);
  
  // 3. Usando o método find para encontrar um produto específico pelo nome
  const produtoEncontado = produtos.find(produto => produto.nome === 'Tênis');
  
  console.log('Produto Encontrado (Tênis):', produtoEncontado);
  
  // 4. Usando o método reduce para calcular o preço total de todos os produtos
  const precoTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
  
  console.log('Preço Total de Todos os Produtos:', precoTotal);
  
  // 5. Usando o método sort para ordenar os produtos por preço (crescente)
  const produtosOrdenadosPorPreco = produtos.sort((a, b) => a.preco - b.preco);
  
  console.log('Produtos Ordenados por Preço (Crescente):', produtosOrdenadosPorPreco);
  
  // 6. Usando o método some para verificar se existe algum produto com preço superior a 100
  const existeProdutoCaro = produtos.some(produto => produto.preco > 100);
  
  console.log('Existe produto com preço superior a 100?', existeProdutoCaro);
  
  // 7. Usando o método every para verificar se todos os produtos têm preço acima de 50
  const todosAcimaDe50 = produtos.every(produto => produto.preco > 50);
  
  console.log('Todos os produtos têm preço acima de 50?', todosAcimaDe50);
  
  // 8. Usando o método forEach para exibir os nomes de todos os produtos
  console.log('Nomes dos Produtos:');
  produtos.forEach(produto => {
    console.log(produto.nome);
  });
  