import { Component, OnInit } from '@angular/core';

import { DadoBruto } from '../types/dado-bruto';

import { DadosBrutoService } from '../services/dados-bruto.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

    private dados : DadoBruto[] = [];
    private isLoading : boolean = true;
    private errorMessage : string = '';

  constructor(private dadosBrutoService: DadosBrutoService) {  }

  ngOnInit() {
      this.dadosBrutoService
        .getAll()
        .subscribe(
            dados => this.dados = dados,
            error => this.errorMessage = error,
            () => this.isLoading = false
        );
  }

}
