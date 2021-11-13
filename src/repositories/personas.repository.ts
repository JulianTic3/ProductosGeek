import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {GeekDbDataSource} from '../datasources';
import {Personas, PersonasRelations, Pedido} from '../models';
import {PedidoRepository} from './pedido.repository';

export class PersonasRepository extends DefaultCrudRepository<
  Personas,
  typeof Personas.prototype.id,
  PersonasRelations
> {

  public readonly pedidos: HasManyRepositoryFactory<Pedido, typeof Personas.prototype.id>;

  public readonly pedido: BelongsToAccessor<Pedido, typeof Personas.prototype.id>;

  constructor(
    @inject('datasources.geekDB') dataSource: GeekDbDataSource, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>,
  ) {
    super(Personas, dataSource);
    this.pedido = this.createBelongsToAccessorFor('pedido', pedidoRepositoryGetter,);
    this.registerInclusionResolver('pedido', this.pedido.inclusionResolver);
    this.pedidos = this.createHasManyRepositoryFactoryFor('pedidos', pedidoRepositoryGetter,);
    this.registerInclusionResolver('pedidos', this.pedidos.inclusionResolver);
  }
}
