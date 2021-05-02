import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../objetos/Produto';
import { ProdutoService } from './../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  prod: any;
  produtos: Array<Produto> = [];
  carregarLoading: Boolean = false;
  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe((prods) => {
      setTimeout(() => {
        this.carregarLoading = true;
        this.produtos = prods;
      }, 1000);
    });
  }

  excluirItem = (id: any) => {
    this.produtoService.excluirItem(id).subscribe(
      (success) => console.log('deletou'),
      (error) => console.log('deu ruim'),
      () => console.log('requisição completa')
    );
    alert('Item deletado');
    this.ngOnInit();
  };

  editar = (id: any) => {
    this.router.navigate(['cadastro', id]);
  };
}
