import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

class cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new cliente();

  profissoes = [
    {codigo: 1, descricao: 'Programador'},
    {codigo: 2, descricao: 'Puta'},
    {codigo: 3, descricao: 'Gerente'},
    {codigo: 4, descricao: 'Outra'}
   ];

  salvar(form: NgForm) {
    console.log(form.value);
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;
    form.reset({profissao: ''});
  }

}
