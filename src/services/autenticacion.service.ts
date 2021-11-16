import { injectable, /* inject, */ BindingScope } from '@loopback/core';
import { repository } from '@loopback/repository';
import { Personas } from '../models';
import { PersonasRepository } from '../repositories';
import { Llaves } from '../config/llaves'
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({ scope: BindingScope.TRANSIENT })
export class AutenticacionService {
  constructor(
    @repository(PersonasRepository)
    public personaRepository: PersonasRepository
  ) { }
  /*
   * Add service methods here
   */
  GenerarClave() {
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPersona(usuario: string, clave: string) {
    try {
      let p = this.personaRepository.findOne({ where: { Correo: usuario, Clave: clave } });
      if (p) {
        return p;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(persona: Personas) {
    let token = jwt.sign({
      data: {
        id: persona.id,
        correo: persona.Correo,
        nombre: persona.Nombre + "" + persona.Apellidos
      }

    },
      Llaves.claveJWT);
    return token;
  }

  ValidarToken(token: string) {
    try {
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }
}
