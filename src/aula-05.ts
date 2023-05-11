interface Estado {
  nome: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;
}

const endereco: Endereco = {
  bairro: "fdsafa",
  rua: "fdsafa",
  cidade: {
    nome: "Rio",
    estado: {
      nome: "Rio",
    },
  },
};

console.log(endereco.complemento?.substring(3) || "DEU ERRO");
console.log(endereco);
