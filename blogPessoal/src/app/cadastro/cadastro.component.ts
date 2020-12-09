import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha!: string

  constructor(
    private authServise: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }
  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {

    if (this.senha === this.user.senha) {
      //subscribe = subscrever o json e transforma lo em objeto
      this.authServise.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso')
      })
      } else {
        alert('Suas senhas não conferem')
      }
    
    

  }

}
