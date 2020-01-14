import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  contaActive: boolean = false;
  historicoActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  activeConta() {
    this.contaActive = true;
    this.historicoActive = false;
  }

  activeHistorico() {
    this.historicoActive = true;
    this.contaActive = false;
  }

}
