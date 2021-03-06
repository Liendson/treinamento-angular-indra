import Swal from 'sweetalert2';

export class SweetAlert {

  static exibirSucesso(titulo: string, mensagem: string) {
    Swal.fire(
      titulo,
      mensagem,
      'success'
    );
  }

  static exibirErro(titulo: string, mensagem: string) {
    Swal.fire(
      titulo,
      mensagem,
      'error'
    );
  }

}