import { Component, OnInit } from '@angular/core';
import { Produto } from '../objetos/Produto';
import {ProdutoService} from './../service/produto.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prod: any
  produtos: Array<Produto> = []
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(prods =>{
      this.produtos = prods
      this.prod = prods
      console.log(this.produtos);
      
    })
  }

}
