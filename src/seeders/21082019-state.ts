import { QueryInterface, Sequelize } from 'sequelize/types';

const generateState: any = (id, minemonic, name) => ({ id, minemonic, name });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('State', {}, null);

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('State', [
    generateState(1, 'AC', 'Acre'),
    generateState(2, 'AL', 'Alagoas'),
    generateState(3, 'AP', 'Amapá'),
    generateState(4, 'AM', 'Amazonas'),
    generateState(5, 'BA', 'Bahia'),
    generateState(6, 'CE', 'Ceará'),
    generateState(7, 'DF', 'Destrito Federal'),
    generateState(8, 'ES', 'Espirito Santo'),
    generateState(9, 'GO', 'Goiás'),
    generateState(10, 'MA', 'Maranhão'),
    generateState(11, 'MT', 'Mato Grosso'),
    generateState(12, 'MS', 'Mato Grosso do Sul'),
    generateState(13, 'MG', 'Minas Gerais'),
    generateState(14, 'PA', 'Pará'),
    generateState(15, 'PB', 'Paraíba'),
    generateState(16, 'PR', 'Paraná'),
    generateState(17, 'PE', 'Pernambuco'),
    generateState(18, 'PI', 'Piauí'),
    generateState(19, 'RJ', 'Rio de Janeiro'),
    generateState(20, 'RN', 'Rio Grande do Norte'),
    generateState(21, 'RS', 'Rio Grande do Sul'),
    generateState(22, 'RO', 'Rondônia'),
    generateState(23, 'RR', 'Roraima'),
    generateState(24, 'SC', 'Santa Catarina'),
    generateState(25, 'SP', 'São Paulo'),
    generateState(26, 'SE', 'Sergipe'),
    generateState(27, 'TO', 'Tocantins'),
  ]);
