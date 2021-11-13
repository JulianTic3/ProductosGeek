import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GeekDbDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.Id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.geekDB') dataSource: GeekDbDataSource,
  ) {
    super(Producto, dataSource);
  }
}
