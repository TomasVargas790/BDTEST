import { Faker, faker } from '@faker-js/faker';

import { CreateCandidato } from './dto/candidato.dto';
import { Candidato } from './model/candidato.model';


let CandidatosArray: Candidato[] = [];
for (let i = 0; i < 30; i++) {
    let currentCandidato: CreateCandidato = {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        documento: faker.datatype.number(),
        correo: faker.internet.email(),
        telefono: parseInt(faker.phone.number()),
        curriculum: faker.commerce.productDescription(),
    }
}