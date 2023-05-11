interface ObjetoQualquer {
  funcao: (param1: number, param2?: number) => number;
}

const funcaoTeste = (param1: number, param2?: number): number => {
  if (!param2) {
    return param1;
  }

  return param1 + param2;
};

const objetoQualqer: ObjetoQualquer = {
  funcao: funcaoTeste,
};

console.log(objetoQualqer.funcao(1));
