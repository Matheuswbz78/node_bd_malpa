exports.formatarEmpresa = (empresa) => {
    return {
      id_empresa: empresa.id_empresa,
      nome_empresa: empresa.nome_empresa,
      email: empresa.email,
      cnpj: empresa.cpf,
      senha: empresa.senha,
      categoria: empresa.empresa
    };
  };
  