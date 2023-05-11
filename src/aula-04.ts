interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const usuario: Usuarios = {
  cidade: "fdsafa",
  pessoas: [
    {
      idade: 54353,
      nome: "fdsaf",
    },
    {
      idade: 233,
      nome: "fdsagsa",
    },
    {
      idade: 233,
      nome: "fdsagsa",
    },
  ],
};

console.log(usuario.pessoas.length);
console.log(usuario);
