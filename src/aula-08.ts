class Outro {
  endereco: string;

  constructor() {
    this.endereco = "";
  }
}

interface Carro {
  idade: number | string;
  nome: string;
}

interface Bicicleta {
  rodas: number;
}

const funcao = (validacao: boolean): Carro | Bicicleta | Outro => {
  if (validacao) {
    return {
      idade: 54,
      nome: "gol",
    };
  }
  return {
    endereco: "fdsfs",
  };
};

const resultado = funcao(false);

if (resultado instanceof Outro) {
  console.log("passou aqui");
}

if ("idade" in resultado) {
  if (typeof resultado.idade === "string") {
    console.log(resultado.idade);
  }
}

if ("rodas" in resultado) {
  console.log(resultado.rodas);
}
