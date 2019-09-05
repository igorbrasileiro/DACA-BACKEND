import { QueryInterface } from 'sequelize/types';

const generateState: any = (minemonic, name) => ({ minemonic, name });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('State', {}, null);

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('State', [
    generateState('AC', 'Acre'),
    generateState('AL', 'Alagoas'),
    generateState('AP', 'Amapá'),
    generateState('AM', 'Amazonas'),
    generateState('BA', 'Bahia'),
    generateState('CE', 'Ceará'),
    generateState('DF', 'Destrito Federal'),
    generateState('ES', 'Espirito Santo'),
    generateState('GO', 'Goiás'),
    generateState('MA', 'Maranhão'),
    generateState('MT', 'Mato Grosso'),
    generateState('MS', 'Mato Grosso do Sul'),
    generateState('MG', 'Minas Gerais'),
    generateState('PA', 'Pará'),
    generateState('PB', 'Paraíba'),
    generateState('PR', 'Paraná'),
    generateState('PE', 'Pernambuco'),
    generateState('PI', 'Piauí'),
    generateState('RJ', 'Rio de Janeiro'),
    generateState('RN', 'Rio Grande do Norte'),
    generateState('RS', 'Rio Grande do Sul'),
    generateState('RO', 'Rondônia'),
    generateState('RR', 'Roraima'),
    generateState('SC', 'Santa Catarina'),
    generateState('SP', 'São Paulo'),
    generateState('SE', 'Sergipe'),
    generateState('TO', 'Tocantins'),
  ]);
