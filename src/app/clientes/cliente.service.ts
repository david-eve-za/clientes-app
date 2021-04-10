import { Injectable } from '@angular/core';
import { CLIENTS } from './clientes.json';
import { Client } from './cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Client[]> { return of(CLIENTS); }
}
