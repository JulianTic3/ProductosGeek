import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GeekDbDataSource} from '../datasources';
import {DetallePedido, DetallePedidoRelations} from '../models';

export class DetallePedidoRepository extends DefaultCrudRepository<
  DetallePedido,
  typeof DetallePedido.prototype.Id,
  DetallePedidoRelations
> {
  constructor(
    @inject('datasources.geekDB') dataSource: GeekDbDataSource,
  ) {
    super(DetallePedido, dataSource);
  }
}
