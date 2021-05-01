import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import{DiasDaSemana} from './../dias-da-semana.enum'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any
  texto: string = 'Teste'
  valor: number = 0
  endereco: [string, number] = ['Rua aprovado no hackaton, numero: ', 5]
  dia: DiasDaSemana = DiasDaSemana.sab
  constructor( 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
      }
    })

    this.texto = this.retornarNome('joão')
  }

  retornarNome = (nome: string): string =>{
    return `${nome} da silva`
  }

}
