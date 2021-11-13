import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Personas,
  Pedido,
} from '../models';
import {PersonasRepository} from '../repositories';

export class PersonasPedidoController {
  constructor(
    @repository(PersonasRepository) protected personasRepository: PersonasRepository,
  ) { }

  @get('/personas/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Array of Personas has many Pedido',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pedido)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Pedido>,
  ): Promise<Pedido[]> {
    return this.personasRepository.pedidos(id).find(filter);
  }

  @post('/personas/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Personas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pedido)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Personas.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {
            title: 'NewPedidoInPersonas',
            exclude: ['Id'],
            optional: ['personasId']
          }),
        },
      },
    }) pedido: Omit<Pedido, 'Id'>,
  ): Promise<Pedido> {
    return this.personasRepository.pedidos(id).create(pedido);
  }

  @patch('/personas/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Personas.Pedido PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {partial: true}),
        },
      },
    })
    pedido: Partial<Pedido>,
    @param.query.object('where', getWhereSchemaFor(Pedido)) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.personasRepository.pedidos(id).patch(pedido, where);
  }

  @del('/personas/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Personas.Pedido DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Pedido)) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.personasRepository.pedidos(id).delete(where);
  }
}
