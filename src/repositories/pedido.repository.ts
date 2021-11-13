import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {GeekDbDataSource} from '../datasources';
import {Pedido, PedidoRelations, Producto, DetallePedido} from '../models';
import {DetallePedidoRepository} from './detalle-pedido.repository';
import {ProductoRepository} from './producto.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.Id,
  PedidoRelations
> {

  public readonly productos: HasManyThroughRepositoryFactory<Producto, typeof Producto.prototype.Id,
          DetallePedido,
          typeof Pedido.prototype.Id
        >;

  constructor(
    @inject('datasources.geekDB') dataSource: GeekDbDataSource, @repository.getter('DetallePedidoRepository') protected detallePedidoRepositoryGetter: Getter<DetallePedidoRepository>, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>,
  ) {
    super(Pedido, dataSource);
    this.productos = this.createHasManyThroughRepositoryFactoryFor('productos', productoRepositoryGetter, detallePedidoRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
  }
}
