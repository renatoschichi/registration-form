import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() form: any[];

  nome: string;
  cpf: number;
  idade: string;
  cep: number;
  numero: number;
  email: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.form);
  }

}
