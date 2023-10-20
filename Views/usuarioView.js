exports.formatarUsuario = (usuario) => {
    return {
      id_usuario: usuario.id_usuario,
      nome: usuario.nome,
      email: usuario.email,
      cpf: usuario.cpf,
      data_nascimento: usuario.data_nascimento,
    };
  };
  