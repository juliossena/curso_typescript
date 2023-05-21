interface Andar {
  passos: number | null;
}

const andar: Andar = {
  passos: null,
};

const funcaoTest = (): undefined | number => {
  if (andar.passos && andar.passos > 5) {
    return 543;
  }
  return undefined;
};

const outroNome = funcaoTest();

if (!andar.passos) {
  console.log("é nulo");
}

if (outroNome) {
  outroNome.toFixed();
}

console.log("andar", andar);
