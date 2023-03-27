import { CreateCandidato } from './dto/candidato.dto';
import { Candidato } from './model/candidato.model';
import { faker } from '@faker-js/faker';


export let CandidatosArray: Candidato[] = [];
for (let i = 0; i <= 30; i++) {
    let currentCandidato: Candidato = {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        documento: faker.datatype.number(),
        correo: faker.internet.email(),
        telefono: parseInt(faker.phone.number()),
        curriculum: faker.commerce.productDescription(),
        id: faker.datatype.uuid(),
        createdAt: faker.date.future(),
        updatedAt: faker.date.future()
    };
    CandidatosArray.push(currentCandidato);
}