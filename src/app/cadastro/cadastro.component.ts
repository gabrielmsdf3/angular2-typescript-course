import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

import { Produto } from './../objetos/Produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  id: any;
  produto: Produto = new Produto(0, '', 0);
  textoBotao: string = 'Salvar';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros) => {
      if (parametros['id']) {
        this.textoBotao = 'Editar';
        this.id = parametros['id'];
        this.prodService.buscarItemID(this.id).subscribe((prod) => {
          this.produto = prod;
        });
        console.log(`Id enviado: ${this.id}`);
      }
    });
  }

  adicionar = () => {
    if (this.textoBotao == 'Salvar') {
      this.prodService.adicionar(this.produto).subscribe(
        (success) => this.navegar('home'),
        (error) => console.log('deu ruim'),
        () => console.log('requisição completa')
      );
      alert('Adicionado com sucesso!');
    } else {
      this.editar();
    }
    this.router.navigate(['home']);
  };

  editar = () => {
    this.prodService.editar(this.produto).subscribe(
      (success) => this.navegar('home'),
      (error) => console.log('deu ruim'),
      () => console.log('requisição completa')
    );
    alert('Editado com sucesso!');
    this.router.navigate(['home']);
  };

  navegar = (rota: any) => {
    this.router.navigate([rota]);
  };
}
