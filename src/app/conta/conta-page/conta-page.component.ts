import { Component, OnInit } from '@angular/core';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-page',
  templateUrl: './conta-page.component.html',
  styleUrls: ['./conta-page.component.scss']
})
export class ContaPageComponent implements OnInit {

  allContas: Conta[] = [];

  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.loadAllContas();
  }

  loadAllContas() {
    this.contaService.getAllContas().subscribe(res => {
      this.allContas = res;
      
    }, err => {
      console.log(err);
    });
  }
}
