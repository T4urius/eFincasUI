import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';
import { FormGroup, FormBuilder, FormControl, ControlValueAccessor } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-conta-page',
  templateUrl: './conta-page.component.html',
  styleUrls: ['./conta-page.component.scss']
})
export class ContaPageComponent implements OnInit {

  @ViewChild("iconFilter", { read: null, static: true }) iconFilter: ElementRef;
  @ViewChild("btnRegistro", { read: null, static: true }) btnRegistro: ElementRef;
  @ViewChild("btnAtualizar", { read: null, static: true }) btnAtualizar: ElementRef;

  allContas: Conta[] = [];
  contaForm: FormGroup;
  descricao: string = '';
  valor: string = '';
  dataCriacao: Date;
  toEdit: any;

  constructor(private contaService: ContaService, private formBuilder: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.btnAtualizar.nativeElement.disabled = true;

    this.contaForm = this.formBuilder.group({
      id: [],
      descricao: [],
      valor: [],
      dataCriacao: Date,
      filter: []
    });
    this.loadAllContas();
  }

  deleteConta(id: any) {
    this.contaService.deleteConta(id).subscribe(e => {
      console.log(e);
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }

  getValuesToEdit(contaEdit: any) {
    this.btnAtualizar.nativeElement.disabled = false;
    this.btnRegistro.nativeElement.disabled = true;
    let dtCria = this.datePipe.transform(contaEdit.dataCriacao, 'yyyy-MM-dd');

    this.contaForm.setValue({
      id: contaEdit.id,
      descricao: contaEdit.descricao,
      valor: contaEdit.valor,
      dataCriacao: dtCria,
      filter: null
    });
  }

  editConta() {
    this.btnAtualizar.nativeElement.disabled = true;
    this.btnRegistro.nativeElement.disabled = false;
    let editValues = this.contaForm.value;

    this.contaService.atualizarConta(editValues).subscribe(e => {
      console.log(e);
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }

  filterList() {
    if (this.iconFilter.nativeElement.style.transform == '') {
      this.iconFilter.nativeElement.style.transform = 'rotate(180deg)';
      this.allContas.reverse();
    }
    else {
      this.iconFilter.nativeElement.style.transform = '';
      this.allContas.reverse();
    }
  }

  loadAllContas() {
    this.contaService.getAllContas().subscribe(res => {
      this.allContas = res;
    }, err => {
      console.log(err);
    });
  }

  registerConta() {
    let conta = this.contaForm.value;

    if (conta.descricao != null || conta.valor != null || conta.dataCriacao != null) {
      this.contaService.registrarConta(conta).subscribe(e => {
        console.log(e);
        this.ngOnInit();
      }, (err: any) => {
        console.log(err);
      })
    }
  }
}
