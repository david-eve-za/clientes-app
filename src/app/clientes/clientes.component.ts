import { Component, OnInit } from '@angular/core';
import { Client } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Client[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      next => this.clientes = next,
      err => console.log('error:', err),
      () => console.log('the end'),
    );
  }

}
