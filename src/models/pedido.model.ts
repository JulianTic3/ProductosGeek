import {Entity, model, property, hasMany} from '@loopback/repository';
import {Producto} from './producto.model';
import {DetallePedido} from './detalle-pedido.model';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  Total: number;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @property({
    type: 'string',
    required: true,
  })
  FormaPago: string;

  @property({
    type: 'string',
  })
  personasId?: string;

  @hasMany(() => Producto, {through: {model: () => DetallePedido}})
  productos: Producto[];

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
