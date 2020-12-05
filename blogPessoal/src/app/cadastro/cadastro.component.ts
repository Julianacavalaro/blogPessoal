import { Component, OnInit } from '@angular/core';
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
    private authServise: AuthService
  ) { }

  ngOnInit() {
  }

  cadastrar() {
    //subscribe = subscrever o json e transforma lo em objeto
    this.authServise.cadastrar(this.user).subscribe((resp: User) => {
      this.user = resp
    })
  
  }

}
