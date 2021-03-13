import Swal from 'sweetalert2';

export class SweetAlert {

  static exibirSucesso(mensagem: string) {
    return Swal.fire(
      'Sucesso!',
      mensagem,
      'success'
    );
  }

  static exibirErro(mensagem: string) {
    return Swal.fire(
      'Erro!',
      mensagem,
      'error'
    );
  }

}