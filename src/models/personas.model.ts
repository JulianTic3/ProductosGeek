import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Pedido} from './pedido.model';

@model()
export class Personas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoDocumento: string;

  @property({
    type: 'string',
    required: true,
  })
  NumeroDocumento: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: false,
  })
  Clave: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  Pais: string;

  @property({
    type: 'date',
    required: false,
  })
  FechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  Rol: string;

  @hasMany(() => Pedido)
  pedidos: Pedido[];

  @belongsTo(() => Pedido)
  pedidoId: string;

  constructor(data?: Partial<Personas>) {
    super(data);
  }
}

export interface PersonasRelations {
  // describe navigational properties here
}

export type PersonasWithRelations = Personas & PersonasRelations;
