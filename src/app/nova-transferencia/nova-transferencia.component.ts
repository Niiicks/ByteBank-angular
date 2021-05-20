import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  constructor(private service: TransferenciaService, private router: Router) {}

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Iniciando nova transferência!');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );

    this.limparCampos();
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
