import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../historico.service';
import { Historico } from '../historico';

@Component({
  selector: 'app-historico-page',
  templateUrl: './historico-page.component.html',
  styleUrls: ['./historico-page.component.scss']
})
export class HistoricoPageComponent implements OnInit {

  listHistorico: any;

  constructor(private historicoService: HistoricoService) {

  }

  ngOnInit() {
    this.getAllHistorico();
  }

  getAllHistorico() {
    this.historicoService.getAllHistoricos()
      .subscribe((result) => {
        this.listHistorico = result;
        console.log(this.listHistorico);
      }, err => {
        console.log(err);
      })
  }
}
