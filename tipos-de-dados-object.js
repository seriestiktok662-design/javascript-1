let pessoa = {
    nome: "Carlos" , 
    idade: 28,
    casado: true,
};
console.log("Casado:", pessoa.casado);
console.log("Tipo de pessoa:", typeof pessoa);
console.log("Propriedades do objeto pessoa:", Object.keys(pessoa));
console.log("Valores do objeto pessoa:", Object.values(pessoa));
console.log("Objeto pessoa completo:", pessoa);
console.log("Objeto pessoa em formato JSON:", JSON.stringify(pessoa));
console.log("Objeto pessoa em formato JSON (com indentação):", JSON.stringify(pessoa, null, 2));
console.log("Objeto pessoa em formato JSON (com indentação e espaçamento):", JSON.stringify(pessoa, null, 4));