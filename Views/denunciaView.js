exports.formatarDenuncia = (denuncia) => {
    return {
      id_denuncia: denuncia.id_denuncia,
      nome: denuncia.nome,
      endereco: denuncia.email,
      numero: denuncia.cpf,
      bairro: denuncia.senha,
      descricao_problema: denuncia.descricao_problema,
      imagens: denuncia.imagens,
      videos: denuncia.videos
    };
  };
  